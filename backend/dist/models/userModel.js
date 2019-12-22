"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

var _validator = _interopRequireDefault(require("validator"));

var _bcrypt = _interopRequireDefault(require("bcrypt"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _config = require("../config");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// TODO: handle password, don't save token.
const userSchema = new _mongoose.default.Schema({
  email: {
    type: String,
    unique: true,
    required: true,
    trim: true,
    lowercase: true,

    validate(value) {
      if (!_validator.default.isEmail(value)) {
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

userSchema.methods.toJSON = function toJSON() {
  const user = this;
  const userObject = user.toObject();
  delete userObject.password;
  delete userObject.tokens;
  delete userObject._id;
  delete userObject.createdAt;
  delete userObject.__v;
  return userObject;
};

userSchema.statics.findByCredentials = async function findByCredentials(email, password) {
  const user = await this.findOne({
    email
  });

  if (!user) {
    throw new Error('User not found');
  }

  const isPasswordMatch = await this.comparePassword(password, user.password);

  if (!isPasswordMatch) {
    throw new Error('Credentials not right');
  }

  return user;
};

userSchema.pre('save', async function hashAndSavePassword(next) {
  const user = this;

  if (user.isModified('password')) {
    user.password = await _bcrypt.default.hash(user.password, _config.SALT_WORK_FACTOR);
  }

  next();
});

userSchema.statics.comparePassword = async function comparePassword(candidatePassword, storedHash) {
  return _bcrypt.default.compare(candidatePassword, storedHash);
};

userSchema.methods.generateAuthToken = async function generateAuthToken() {
  const user = this;

  const token = _jsonwebtoken.default.sign({
    _id: user._id.toString()
  }, _config.JSON_WEB_SECRET_KEY);

  user.tokens = user.tokens.concat({
    token
  });
  await user.save();
  return token;
};

const User = _mongoose.default.model('User', userSchema);

var _default = User;
exports.default = _default;