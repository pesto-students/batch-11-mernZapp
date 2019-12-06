"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.userCreate = exports.userLogin = void 0;

var _user = _interopRequireDefault(require("../models/user"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var userLogin = function userLogin(req, res) {
  var user, token;
  return regeneratorRuntime.async(function userLogin$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(_user["default"].findByCredentials(req.body.email, req.body.password));

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
          user = new _user["default"](req.body);
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
          res.status(500).send('Error in creating user');

        case 13:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[1, 10]]);
};

exports.userCreate = userCreate;