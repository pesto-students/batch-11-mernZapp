import express from 'express';
import initDb from './db/mongoose';
import userRouter from './routers/userRouter';

// TODO: remove
// import Service from './models/serviceModel';
import router from './routers/slack';

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
app.use(router);

app.listen(3000, () => console.log('App listening on port 3000!'));
