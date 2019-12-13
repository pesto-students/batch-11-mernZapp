import express from 'express';
import initDb from './db/mongoose';
import userRouter from './routers/userRouter';
import servicesRouter from './routers/servicesRouter';
import zappRouter from './routers/zappRouter';
import { NODE_ENV, DEV_NODE_SERVER_PORT } from './config/index';
import githubWebhookHandler from './thirdParties/github/webhookHandler';

const app = express();

app.use(express.json());
app.use(userRouter);
app.use(servicesRouter);
app.use(zappRouter);

// register webhook handlers
app.use(githubWebhookHandler);

initDb().then(() => {
  if (NODE_ENV !== 'test') {
    app.listen(DEV_NODE_SERVER_PORT, () => {
      console.log(`App listening on port ${DEV_NODE_SERVER_PORT}!`);
    });
  }
}).catch(error => {
  console.log(error);
});

export default app;
