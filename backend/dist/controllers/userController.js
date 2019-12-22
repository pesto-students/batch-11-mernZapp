"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteUser = exports.logoutUser = exports.userCreate = exports.userLogin = void 0;

var _userModel = _interopRequireDefault(require("../models/userModel"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const userLogin = async (req, res) => {
  try {
    const user = await _userModel.default.findByCredentials(req.body.email, req.body.password);
    const token = await user.generateAuthToken();
    res.send({
      user,
      token
    });
  } catch (error) {
    res.status(500).send('Error in login api');
  }
};

exports.userLogin = userLogin;

const userCreate = async (req, res) => {
  const user = new _userModel.default(req.body);

  try {
    await user.save();
    const token = await user.generateAuthToken();
    res.send({
      user,
      token
    });
  } catch (error) {
    console.log(error);
    res.status(400).send('Error in creating user');
  }
};

exports.userCreate = userCreate;

const logoutUser = async (req, res) => {
  try {
    req.user.tokens = req.user.tokens.filter(token => token.token !== req.token);
    await req.user.save();
    res.send();
  } catch (error) {
    res.status(500).send();
  }
};

exports.logoutUser = logoutUser;

const deleteUser = (req, res) => {
  try {
    req.user.remove();
    res.send(req.user);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};

exports.deleteUser = deleteUser;