"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

var _validator = _interopRequireDefault(require("validator"));

var _bcrypt = _interopRequireDefault(require("bcrypt"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _this = void 0;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var SALT_WORK_FACTOR = 10; // TODO: handle password

var userSchema = new _mongoose["default"].Schema({
  email: {
    type: String,
    unique: true,
    required: true,
    trim: true,
    lowercase: true,
    validate: function validate(value) {
      if (!_validator["default"].isEmail(value)) {
        throw new Error('Email is invalid');
      }
    },
    password: {
      type: String,
      required: true
    }
  }
}, {
  timestamps: true
});

var User = _mongoose["default"].model('User', userSchema);

userSchema.pre('save', function _callee(next) {
  var user;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          user = _this;
          _context.next = 3;
          return regeneratorRuntime.awrap(_bcrypt["default"].hash(user.password, SALT_WORK_FACTOR));

        case 3:
          user.password = _context.sent;
          next();

        case 5:
        case "end":
          return _context.stop();
      }
    }
  });
});

userSchema.statics.comparePassword = function _callee2(candidatePassword, storedHash) {
  var isMatch;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return regeneratorRuntime.awrap(_bcrypt["default"].compare(candidatePassword, storedHash));

        case 2:
          isMatch = _context2.sent;
          return _context2.abrupt("return", isMatch);

        case 4:
        case "end":
          return _context2.stop();
      }
    }
  });
};

userSchema.methods.generateAuthToken = function _callee3() {
  var user, token;
  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          user = _this;
          token = _jsonwebtoken["default"].sign({
            _id: user._id.toString()
          }, process.env.JSON_WEB_SECRET_KEY);
          _context3.next = 4;
          return regeneratorRuntime.awrap(user.save());

        case 4:
          return _context3.abrupt("return", token);

        case 5:
        case "end":
          return _context3.stop();
      }
    }
  });
};

userSchema.statics.findByCredentials = function _callee4(email, password) {
  var user, isPasswordMatch;
  return regeneratorRuntime.async(function _callee4$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return regeneratorRuntime.awrap(User.findOne({
            email: email
          }));

        case 2:
          user = _context4.sent;

          if (user) {
            _context4.next = 5;
            break;
          }

          throw new Error('User not found');

        case 5:
          _context4.next = 7;
          return regeneratorRuntime.awrap(User.comparePassword(password, user.password));

        case 7:
          isPasswordMatch = _context4.sent;

          if (isPasswordMatch) {
            _context4.next = 10;
            break;
          }

          throw new Error('Credentials not right');

        case 10:
          return _context4.abrupt("return", user);

        case 11:
        case "end":
          return _context4.stop();
      }
    }
  });
};

var _default = User;
exports["default"] = _default;