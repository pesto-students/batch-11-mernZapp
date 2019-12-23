import express from 'express';

const router = new express.Router();

router.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, DELETE, PUT');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, *');
  res.setHeader('Access-Control-Max-Age', 7200);
  if (req.method === 'OPTIONS') {
    res.send();
  }
  next();
});

export default router;
