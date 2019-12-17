"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _serviceControllers = require("../controllers/serviceControllers");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = new _express.default.Router();
router.get('/services', _serviceControllers.getServices);
router.get('/actions/:service', _serviceControllers.getActionsForService);
router.get('/triggers/:service', _serviceControllers.getTriggerForService);
var _default = router;
exports.default = _default;