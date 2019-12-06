import mongoose from 'mongoose';

const initDb = () => {
  mongoose.connect('mongodb://127.0.0.1:27017/mernzapp', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  });
};

export default initDb;
