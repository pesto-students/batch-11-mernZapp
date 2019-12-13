import mongoose from 'mongoose';
import { DATABASE_URL } from '../config';

const initDb = () => mongoose.connect(DATABASE_URL || process.env.MONGO_URL, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

export default initDb;
