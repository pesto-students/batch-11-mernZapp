import mongoose from 'mongoose';

<<<<<<< HEAD
mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});
=======
// const MongoClient = require('mongodb').MongoClient;
// const uri = "mongodb+srv://m001-student:jatin%401996@cluster0-hseid.mongodb.net/test?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });

const initDb = () => {
  mongoose.connect('mongodb+srv://m001-student:jatin%401996@cluster0-hseid.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  });
};

export default initDb;
>>>>>>> 5f81bed3b93e8ef712fbb13ce8bad1808a41edf4
