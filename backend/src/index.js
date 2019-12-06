import express from 'express';
import initDb from './db/mongoose';
import userRouter from './routers/userRouter';

const app = express();

initDb();

app.use(express.json());
app.use(userRouter);

app.listen(3000, () => console.log('App listening on port 3000!'));
