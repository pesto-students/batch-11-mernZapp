"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _slack_util = require("../controllers/slack_util");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = new _express["default"].Router();
router.get('/slack/handle', _slack_util.slackHandler);
var _default = router;
exports["default"] = _default;