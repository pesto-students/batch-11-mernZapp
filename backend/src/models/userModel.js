/* eslint-disable no-use-before-define */
/* eslint-disable no-underscore-dangle */
import mongoose from 'mongoose';
import validator from 'validator';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const SALT_WORK_FACTOR = 10;

// TODO: handle password
const userSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: true,
    trim: true,
    lowercase: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error('Email is invalid');
      }
    },
  },
  password: {
    type: String,
    required: true,
  },
  tokens: [{
    token: {
      type: String,
      required: true,
    },
  }],
}, {
  timestamps: true,
});

userSchema.statics.findByCredentials = async function findByCredentials(email, password) {
  const user = await User.findOne({ email });

  if (!user) {
    throw new Error('User not found');
  }

  const isPasswordMatch = await User.comparePassword(password, user.password);

  if (!isPasswordMatch) {
    throw new Error('Credentials not right');
  }
  return user;
};

userSchema.pre('save', async function hashAndSavePassword(next) {
  const user = this;
  if (user.isModified('password')) {
    user.password = await bcrypt.hash(user.password, SALT_WORK_FACTOR);
  }
  next();
});

userSchema.statics.comparePassword = async function comparePassword(candidatePassword, storedHash) {
  const isMatch = await bcrypt.compare(candidatePassword, storedHash);
  return isMatch;
};

userSchema.methods.generateAuthToken = async function generateAuthToken() {
  const user = this;
  // const timeInMilliseconds = Date.now();
  const token = jwt
    .sign({ _id: user._id.toString() }, process.env.JSON_WEB_SECRET_KEY);
  user.tokens = user.tokens.concat({
    token,
  });
  await user.save();
  return token;
};

const User = mongoose.model('User', userSchema);
export default User;
