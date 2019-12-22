"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _mongoose = _interopRequireDefault(require("./db/mongoose"));

var _userRouter = _interopRequireDefault(require("./routers/userRouter"));

var _servicesRouter = _interopRequireDefault(require("./routers/servicesRouter"));

var _index = require("./config/index");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const app = (0, _express.default)();
app.use(_express.default.json());
app.use(_userRouter.default);
app.use(_servicesRouter.default);
(0, _mongoose.default)().then(() => {
  if (_index.NODE_ENV !== 'test') {
    app.listen(3000, () => {
      console.log('App listening on port 3000!');
    });
  }
}).catch(error => {
  console.log(error);
});
var _default = app;
exports.default = _default;