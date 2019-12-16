"use strict";

var _express = _interopRequireDefault(require("express"));

var _githubController = require("../controllers/githubController");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = new _express["default"].Router();
router.post('/webhook-github', _githubController.handleWebHook);