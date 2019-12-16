"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.logoutUser = exports.userCreate = exports.userLogin = void 0;

var _userModel = _interopRequireDefault(require("../models/userModel"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var userLogin = function userLogin(req, res) {
  var user, token;
  return regeneratorRuntime.async(function userLogin$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(_userModel["default"].findByCredentials(req.body.email, req.body.password));

        case 3:
          user = _context.sent;
          _context.next = 6;
          return regeneratorRuntime.awrap(user.generateAuthToken());

        case 6:
          token = _context.sent;
          res.send({
            user: user,
            token: token
          });
          _context.next = 13;
          break;

        case 10:
          _context.prev = 10;
          _context.t0 = _context["catch"](0);
          res.status(500).send('Error in login api');

        case 13:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 10]]);
};

exports.userLogin = userLogin;

var userCreate = function userCreate(req, res) {
  var user, token;
  return regeneratorRuntime.async(function userCreate$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          // console.log(req.body, User);
          user = new _userModel["default"](req.body);
          _context2.prev = 1;
          _context2.next = 4;
          return regeneratorRuntime.awrap(user.save());

        case 4:
          _context2.next = 6;
          return regeneratorRuntime.awrap(user.generateAuthToken());

        case 6:
          token = _context2.sent;
          res.send({
            user: user,
            token: token
          });
          _context2.next = 13;
          break;

        case 10:
          _context2.prev = 10;
          _context2.t0 = _context2["catch"](1);
          res.status(400).send('Error in creating user');

        case 13:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[1, 10]]);
};

exports.userCreate = userCreate;

var logoutUser = function logoutUser(req, res) {
  return regeneratorRuntime.async(function logoutUser$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          // console.log(req.user.tokens)
          req.user.tokens = req.user.tokens.filter(function (token) {
            return token.token !== req.token;
          }); // console.log(req.user.tokens)

          _context3.next = 4;
          return regeneratorRuntime.awrap(req.user.save());

        case 4:
          res.send();
          _context3.next = 10;
          break;

        case 7:
          _context3.prev = 7;
          _context3.t0 = _context3["catch"](0);
          res.status(500).send();

        case 10:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, [[0, 7]]);
};

exports.logoutUser = logoutUser;