import mongoose from 'mongoose';
import validator from 'validator';
import bcrypt from 'bcrypt';

const SALT_WORK_FACTOR = 10;

// TODO: handle password
const UserSchema = new mongoose.Schema({
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


UserSchema.pre('save', async next => {
  const user = this;
  user.password = await bcrypt.hash(user.password, SALT_WORK_FACTOR);
  next();
});

UserSchema.methods.comparePassword = async (candidatePassword, storedHash) => {
  const isMatch = await bcrypt.compare(candidatePassword, storedHash);
  return isMatch;
};
