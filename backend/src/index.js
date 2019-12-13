import express from 'express';
import initDb from './db/mongoose';
import userRouter from './routers/userRouter';
import servicesRouter from './routers/servicesRouter';
import zappRouter from './routers/zappRouter';
import { NODE_ENV, DEV_NODE_SERVER_PORT } from './config/index';

const app = express();

app.use(express.json());
app.use(userRouter);
app.use(servicesRouter);
app.use(zappRouter);


initDb().then(() => {
  if (NODE_ENV !== 'test') {
    app.listen(DEV_NODE_SERVER_PORT, () => {
      console.log('App listening on port 3000!');
    });
  }
}).catch(error => {
  console.log(error);
});

export default app;
