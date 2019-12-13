import express from 'express';
import initDb from './db/mongoose';
import userRouter from './routers/userRouter';
import './config/index';
import slackRouter from './slack-api/routes/routes';

// import slackApi from './slack-api/service';
// import controller from './slack-api/controller';

const app = express();
require('dotenv').config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'ejs');
// app.get('/slack', (req, res) => {
//   const integUrl = slackApi.loginSlack();
//   res.render('slackIinteg', {
//     integUrl,
//   });
// });

// app.get('/mernZapp/slack/auth/redirect', (req, res) => {
//   controller.authRedirectCallback(req, res);
// });

// app.post('/slack/events', (req, res) => {
//   controller.postTochannel(req.body);
//   const { challenge } = req.body;
//   res.send(challenge);
// });

app.get('/', (_req, res) => {
  res.send('hello world');
});

app.use(express.json());
app.use(userRouter);
app.use(slackRouter);

initDb().then(() => {
  app.listen(3000, () => {
    console.log('App listening on port 3000!');
  });
}).catch(error => {
  console.log(error);
});

export default app;
