import express from 'express';

const router = new express.Router();

router.get('/users/login', (req, res) => {
  res.send('User will sign in here');
});

export default router;
