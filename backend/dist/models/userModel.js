"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

var _validator = _interopRequireDefault(require("validator"));

var _bcrypt = _interopRequireDefault(require("bcrypt"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/* eslint-disable no-use-before-define */

/* eslint-disable no-underscore-dangle */
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
    }
  },
  password: {
    type: String,
    required: true
  },
  tokens: [{
    token: {
      type: String,
      required: true
    }
  }]
}, {
  timestamps: true
});

userSchema.statics.findByCredentials = function findByCredentials(email, password) {
  var user, isPasswordMatch;
  return regeneratorRuntime.async(function findByCredentials$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(User.findOne({
            email: email
          }));

        case 2:
          user = _context.sent;

          if (user) {
            _context.next = 5;
            break;
          }

          throw new Error('User not found');

        case 5:
          _context.next = 7;
          return regeneratorRuntime.awrap(User.comparePassword(password, user.password));

        case 7:
          isPasswordMatch = _context.sent;

          if (isPasswordMatch) {
            _context.next = 10;
            break;
          }

          throw new Error('Credentials not right');

        case 10:
          return _context.abrupt("return", user);

        case 11:
        case "end":
          return _context.stop();
      }
    }
  });
};

userSchema.pre('save', function hashAndSavePassword(next) {
  var user;
  return regeneratorRuntime.async(function hashAndSavePassword$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          user = this;

          if (!user.isModified('password')) {
            _context2.next = 5;
            break;
          }

          _context2.next = 4;
          return regeneratorRuntime.awrap(_bcrypt["default"].hash(user.password, SALT_WORK_FACTOR));

        case 4:
          user.password = _context2.sent;

        case 5:
          next();

        case 6:
        case "end":
          return _context2.stop();
      }
    }
  }, null, this);
});

userSchema.statics.comparePassword = function comparePassword(candidatePassword, storedHash) {
  var isMatch;
  return regeneratorRuntime.async(function comparePassword$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return regeneratorRuntime.awrap(_bcrypt["default"].compare(candidatePassword, storedHash));

        case 2:
          isMatch = _context3.sent;
          return _context3.abrupt("return", isMatch);

        case 4:
        case "end":
          return _context3.stop();
      }
    }
  });
};

userSchema.methods.generateAuthToken = function generateAuthToken() {
  var user, token;
  return regeneratorRuntime.async(function generateAuthToken$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          user = this; // const timeInMilliseconds = Date.now();

          token = _jsonwebtoken["default"].sign({
            _id: user._id.toString()
          }, process.env.JSON_WEB_SECRET_KEY);
          user.tokens = user.tokens.concat({
            token: token
          });
          _context4.next = 5;
          return regeneratorRuntime.awrap(user.save());

        case 5:
          return _context4.abrupt("return", token);

        case 6:
        case "end":
          return _context4.stop();
      }
    }
  }, null, this);
};

var User = _mongoose["default"].model('User', userSchema);

var _default = User;
exports["default"] = _default;