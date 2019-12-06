import express from 'express';
import { userLogin } from '../controllers/userController';

const router = new express.Router();

router.post('/users/login', userLogin);

export default router;
