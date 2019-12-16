"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// will be made after getting the authentication.
var serviceInstanceSchema = new _mongoose["default"].Schema({
  service: {
    type: _mongoose["default"].Schema.Types.ObjectId,
    ref: 'Service',
    required: true
  },
  user: {
    type: _mongoose["default"].Schema.Types.ObjectId,
    ref: 'User'
  },
  accessToken: {
    type: String
  },
  email: {
    type: String,
    required: true
  }
}, {
  timestamps: true
});

var ServiceInstance = _mongoose["default"].model('ServiceInstance', serviceInstanceSchema);

var _default = ServiceInstance;
exports["default"] = _default;