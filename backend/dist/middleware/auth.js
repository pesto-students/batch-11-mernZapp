"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _userModel = _interopRequireDefault(require("../models/userModel"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/* eslint-disable no-underscore-dangle */
var auth = function auth(req, res, next) {
  var token, decoded, user;
  return regeneratorRuntime.async(function auth$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          // console.log('in middleware')
          token = req.header('Authorization').replace('Bearer ', '');
          decoded = _jsonwebtoken["default"].verify(token, process.env.JSON_WEB_SECRET_KEY); // TODO: Add time factor.

          _context.next = 5;
          return regeneratorRuntime.awrap(_userModel["default"].findOne({
            _id: decoded._id,
            'tokens.token': token
          }));

        case 5:
          user = _context.sent;

          if (user) {
            _context.next = 8;
            break;
          }

          throw new Error();

        case 8:
          req.token = token;
          req.user = user;
          next();
          _context.next = 16;
          break;

        case 13:
          _context.prev = 13;
          _context.t0 = _context["catch"](0);
          res.status(401).send({
            error: 'please authenticate'
          });

        case 16:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 13]]);
};

var _default = auth;
exports["default"] = _default;