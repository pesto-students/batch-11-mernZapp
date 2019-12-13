import express from 'express';

const router = new express.Router();

router.post('/githubwebhook', (req, res) => {
  res.status(200).send({ key: 'hello' });
});

export default router;
