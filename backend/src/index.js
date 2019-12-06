import express from 'express';
import initDb from './db/mongoose';
import userRouter from './routers/user';

const app = express();

initDb();

app.use(express.json());
app.use(userRouter);

console.log('es6 features works');
app.get('/', (_req, res) => {
  res.send('hello world');
});

app.listen(3000, () => console.log('App listening on port 3000!'));
