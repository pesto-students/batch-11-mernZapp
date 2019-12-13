import slackService from './service';


const authRedirectCallback = async (req, res) => {

  try {
    const { code } = req.query;
    if (code) {
      const data = await slackService.getUserData(code);
      console.log(data);
      const status = await slackService.addUserData(data);
      if (status) {
        res.send(req.status);
      } else {
        res.send(req.status);
      }
    }
  } catch (error) {
    console.error(error);
  }
};

const postTochannel = (data) => {
  const channelid = data.event.channel;
  if (data.event.channel_type === 'im') {
    slackService.postmessageToSlac(data);
  }
};

export default {
  authRedirectCallback,
  postTochannel,
};
