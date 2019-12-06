import express from 'express';
import { userLogin, userCreate, logoutUser } from '../controllers/userController';
import auth from '../middleware/auth';

const router = new express.Router();

router.post('/users/login', userLogin);

router.post('/users/create', userCreate);

router.post('/users/logout', auth, logoutUser);

export default router;
