"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.slackHandler = void 0;

var _request = _interopRequireDefault(require("request"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var getChannels = function getChannels() {
  var token = 'xoxp-862320502628-862776816144-863698614853-df9dace655a4688ccce0f69122acefb6';
  var url = 'https://slack.com/api/conversations.list';
  var channelList;
  (0, _request["default"])(url.concat("?token=".concat(token)), function (error, response, body) {
    var _JSON$parse = JSON.parse(body),
        channels = _JSON$parse.channels;

    console.log(channels.length);
    channelList = channels.map(function (channelInfo) {
      return {
        id: channelInfo.id,
        name: channelInfo.name
      };
    });
  });
  return channelList;
};

var sendMessage = function sendMessage() {
  var token = 'xoxp-862320502628-862776816144-863698614853-df9dace655a4688ccce0f69122acefb6';
  var text = 'Hello World';
  var channel = 'CRCP4SU4D';
  var url = 'https://slack.com/api/chat.postMessage';
  var data = JSON.stringify({
    token: token,
    text: text,
    channel: channel
  });
  var headers = {
    Authorization: "Bearer ".concat(token),
    'Content-type': 'application/json'
  };
  (0, _request["default"])({
    url: url,
    headers: headers,
    method: 'POST',
    body: data
  }, function (error, response, body) {
    return console.log(body);
  });
};

var slackHandler = function slackHandler(req, res) {
  var requestBody = req.body;

  if ('challenge' in requestBody) {
    var challengeHash = requestBody.challenge;
    res.status(200);
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({
      challenge: challengeHash
    }));
  } else {
    getChannels();
    sendMessage();
  }
};

exports.slackHandler = slackHandler;