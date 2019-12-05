import express from 'express';
import initDb from './db/mongoose';
import userRouter from './routers/userRouter';
import './config/index';

const app = express();

app.use(express.json());
app.use(userRouter);


initDb().then(() => {
  app.listen(3000, () => {
    console.log('App listening on port 3000!');
  });
}).catch(error => {
  console.log(error);
});

export default app;
