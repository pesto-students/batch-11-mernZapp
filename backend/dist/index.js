"use strict";

var _express = _interopRequireDefault(require("express"));

var _mongoose = _interopRequireDefault(require("./db/mongoose"));

var _userRouter = _interopRequireDefault(require("./routers/userRouter"));

var _slack = _interopRequireDefault(require("./routers/slack"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// import request from 'request';
// TODO: remove
// import Service from './models/serviceModel';
var app = (0, _express["default"])();
(0, _mongoose["default"])(); // const initGithubHook = () => {
//   const url = 'https://api.github.com/repos/:owner/:repo/hooks'
//     .replace(':owner', 'harish-aka-shivi')
//     .replace(':repo', 'task-manager');
//   const requestData = `{
//     "name": "web",
//     "active": true,
//     "events": [
//       "push",
//     ],
//     "config": {
//       "url": " https://webhook.site/1f2bd7d1-c6ba-4898-9a76-9247327423d5 ",
//       "content_type": "json",
//       "insecure_ssl": "0"
//     }
//   }`;
//   request({
//     url,
//     method: 'POST',
//     json: requestData,
//     headers: {
//       'User-Agent': 'harish-aka-shivi',
//     },
//   }, (error, response, body) => {
//     console.error('error:', error); // Print the error if one occurred
//     console.log('statusCode:', response && response.statusCode);
//     // Print the response status code if a response was received
//     console.log('body:', body);
//   });
// };
// initGithubHook();
// Put dummy data.c
// const putDummyData = () => {
//   const service = new Service({ name: 'github' });
//   try {
//     service.save();
//   } catch (error) {
//     console.log(error);
//   }
// };
// putDummyData();

app.use(_express["default"].json());
app.use(_userRouter["default"]);
app.use(_slack["default"]);
console.log('es6 features works');
app.get('/', function (_req, res) {
  res.send('hello world');
});
app.listen(3000, function () {
  return console.log('App listening on port 3000!');
});