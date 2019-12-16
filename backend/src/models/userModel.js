import mongoose from 'mongoose';
import validator from 'validator';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { JSON_WEB_SECRET_KEY, SALT_WORK_FACTOR } from '../config';

// TODO: handle password, don't save token.
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
  username: {
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
  const user = await this.findOne({ email });

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
    user.password = await bcrypt.hash(user.password, SALT_WORK_FACTOR);
  }
  next();
});

userSchema.statics.comparePassword = async function comparePassword(candidatePassword, storedHash) {
  return bcrypt.compare(candidatePassword, storedHash);
};

userSchema.methods.generateAuthToken = async function generateAuthToken() {
  const user = this;
  const token = jwt
    .sign({ _id: user._id.toString() }, JSON_WEB_SECRET_KEY);
  user.tokens = user.tokens.concat({
    token,
  });
  await user.save();
  return token;
};

const User = mongoose.model('User', userSchema);
export default User;
