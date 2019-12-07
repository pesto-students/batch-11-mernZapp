import express from 'express';
import initDb from './db/mongoose';
import userRouter from './routers/userRouter';

// TODO: remove
// import Service from './models/serviceModel';

const app = express();

initDb();

// Put dummy data.c
// const putDummyData = () => {
//   const service = new Service({ name: 'github' });
//   try {
//     service.save();
//   } catch (error) {
//     console.log(error);
//   }
// };
// putDummyData();


app.use(express.json());
app.use(userRouter);

app.listen(3000, () => console.log('App listening on port 3000!'));
