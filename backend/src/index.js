import express from 'express';
import githubappRouter from './routers/githubapp-router';

const app = express();

app.use(githubappRouter);

app.get('/', (_req, res) => {
  res.send('hello world');
});

app.listen(3000, () => console.log('App listening on port 3000!'));
