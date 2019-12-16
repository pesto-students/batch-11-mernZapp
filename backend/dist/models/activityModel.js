"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var activitySchema = new _mongoose["default"].Schema({
  service: {
    type: _mongoose["default"].Schema.Types.ObjectId,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  params: {
    type: {}
  }
});

var Activity = _mongoose["default"].model('Activity', activitySchema);

var _default = Activity;
exports["default"] = _default;