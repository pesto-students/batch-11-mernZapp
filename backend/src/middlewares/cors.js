import express from 'express';

const router = new express.Router();

router.use((req, res, next) => {
  if (req.headers.origin !== undefined) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, DELETE, PUT');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, *');
  }
  next();
});

export default router;
