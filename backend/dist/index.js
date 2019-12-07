"use strict";

var _express = _interopRequireDefault(require("express"));

var _mongoose = _interopRequireDefault(require("./db/mongoose"));

var _user = _interopRequireDefault(require("./routers/user"));

var _slack = _interopRequireDefault(require("./routers/slack"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])();
var PORT = process.env.PORT || 5000;
(0, _mongoose["default"])();
app.use(_express["default"].json());
app.use(_user["default"]);
app.use(_slack["default"]);
console.log('es6 features works');
app.get('/', function (_req, res) {
  res.send('hello world');
});
app.listen(PORT, function () {
  return console.log('App listening on port 3000!');
});