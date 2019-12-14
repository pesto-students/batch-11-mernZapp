import express from 'express';
import initDb from './db/mongoose';
import userRouter from './routers/userRouter';
import servicesRouter from './routers/servicesRouter';
import githubappRouter from './routers/githubapp-router';
import { NODE_ENV } from './config/index';

const app = express();

app.use(express.json());
app.use(userRouter);
app.use(servicesRouter);
app.use(githubappRouter);

app.get('/', (_req, res) => {
  res.send('hello world');
});


initDb().then(() => {
  if (NODE_ENV !== 'test') {
    app.listen(3000, () => {
      console.log('App listening on port 3000!');
    });
  }
}).catch(error => {
  console.log(error);
});

export default app;
