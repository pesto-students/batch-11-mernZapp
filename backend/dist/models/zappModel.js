"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var zappModel = _mongoose["default"].Schema({
  user: {
    type: _mongoose["default"].Schema.Types.ObjectId,
    ref: 'User'
  },
  trigger: {
    type: _mongoose["default"].Schema.Types.ObjectId,
    ref: 'ActivityInstance'
  },
  action: {
    type: _mongoose["default"].Schema.Types.ObjectId,
    ref: 'ActivityInstance'
  },
  name: {
    type: String
  },
  status: {
    type: Boolean
  }
});

var Zapp = _mongoose["default"].model('Zapp', zappModel);

var _default = Zapp;
exports["default"] = _default;