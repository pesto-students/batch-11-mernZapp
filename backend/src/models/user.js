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
    password: {
      type: String,
      required: true,
    },
  },
}, {
  timestamps: true,
});

const User = mongoose.model('User', userSchema);


userSchema.pre('save', async next => {
  const user = this;
  user.password = await bcrypt.hash(user.password, SALT_WORK_FACTOR);
  next();
});

userSchema.statics.comparePassword = async (candidatePassword, storedHash) => {
  const isMatch = await bcrypt.compare(candidatePassword, storedHash);
  return isMatch;
};

userSchema.methods.generateAuthToken = async () => {
  const user = this;
  const token = jwt.sign({ _id: user._id.toString() }, process.env.JSON_WEB_SECRET_KEY);

  await user.save();
  return token;
};

userSchema.statics.findByCredentials = async (email, password) => {
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

export default User;
