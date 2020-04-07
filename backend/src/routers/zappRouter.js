import express from 'express';
import {
  createZapp,
  deleteZapp,
  zappLogs,
} from '../controllers/zappController';
import auth from '../middlewares/auth';

const router = new express.Router();

router.post('/create-zapp', auth, createZapp);

router.delete('/delete-zapp/:zapid', auth, deleteZapp);

router.get('/zapp-logs', auth, zappLogs);

export default router;
