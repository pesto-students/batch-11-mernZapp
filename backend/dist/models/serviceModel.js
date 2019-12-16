"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var serviceSchema = new _mongoose["default"].Schema({
  name: {
    type: String,
    unique: true,
    trim: true,
    lowercase: true
  } // adding this field for now.

});

var Service = _mongoose["default"].model('Service', serviceSchema);

var _default = Service;
exports["default"] = _default;