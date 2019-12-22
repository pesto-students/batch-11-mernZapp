"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _userController = require("../controllers/userController");

var _auth = _interopRequireDefault(require("../middlewares/auth"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = new _express.default.Router();
router.post('/users/login', _userController.userLogin);
router.post('/users/create', _userController.userCreate);
router.post('/users/logout', _auth.default, _userController.logoutUser);
router.delete('/users/me', _auth.default, _userController.deleteUser);
var _default = router;
exports.default = _default;