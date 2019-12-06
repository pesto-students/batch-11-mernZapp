import express from 'express';
import { userLogin, userCreate } from '../controllers/userController';

const router = new express.Router();

router.post('/users/login', userLogin);

router.post('/users/create', userCreate);

export default router;
