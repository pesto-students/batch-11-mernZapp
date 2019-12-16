"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _git_util = require("../controllers/git_util");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = new _express["default"].Router();
router.post('/github/issues', _git_util.gitIssueHandler);
var _default = router;
exports["default"] = _default;