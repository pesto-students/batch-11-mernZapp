import mongoose from 'mongoose';

const initDb = () => {
  mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  });
};

export default initDb;
