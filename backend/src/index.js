import express from 'express';
import initDb from './db/mongoose';
import userRouter from './routers/user';
import router from './routers/slack';

const app = express();

initDb();

app.use(express.json());
app.use(userRouter);
app.use(router);

console.log('es6 features works');
app.get('/', (_req, res) => {
  res.send('hello world');
});

app.listen(process.env.PORT || 3000, () => console.log('App listening on port 3000!'));
