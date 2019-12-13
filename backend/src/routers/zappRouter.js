import express from 'express';
import {
  createZapp,
  deleteZapp,
} from '../controllers/zappController';
import auth from '../middlewares/auth';

const router = new express.Router();

router.post('/create-zapp', auth, createZapp);

router.delete('/delete-zapp/:zapid', auth, deleteZapp);

export default router;
