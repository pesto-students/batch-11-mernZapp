import mongoose from 'mongoose';

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
  }).then(results => {
    console.log(results);
  });
};

export default initDb;
