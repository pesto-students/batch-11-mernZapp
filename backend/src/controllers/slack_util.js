import request from 'request';

const getChannels = () => {
  const token = 'xoxp-862320502628-862776816144-863698614853-df9dace655a4688ccce0f69122acefb6';
  const url = 'https://slack.com/api/conversations.list';
  let channelList;
  request(url.concat(`?token=${token}`), (error, response, body) => {
    const { channels } = JSON.parse(body);
    console.log(channels.length);
    channelList = channels.map(channelInfo => ({ id: channelInfo.id, name: channelInfo.name }));
  });
  return channelList;
};

const sendMessage = () => {
  const token = 'xoxp-862320502628-862776816144-863698614853-df9dace655a4688ccce0f69122acefb6';
  const text = 'Hello World';
  const channel = 'CRCP4SU4D';
  const url = 'https://slack.com/api/chat.postMessage';
  const data = JSON.stringify({ token, text, channel });
  const headers = { Authorization: `Bearer ${token}`, 'Content-type': 'application/json' };
  request({
    url, headers, method: 'POST', body: data,
  }, (error, response, body) => console.log(body));
};

const slackHandler = (req, res) => {
  const requestBody = req.body;
  if ('challenge' in requestBody) {
    const challengeHash = requestBody.challenge;
    res.status(200);
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ challenge: challengeHash }));
  } else {
    getChannels();
    sendMessage();
  }
};

export {
  slackHandler,
};
