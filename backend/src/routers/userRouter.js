import express from 'express';
import {
  userLogin,
  userCreate,
  logoutUser,
  deleteUser,
  addToken,
} from '../controllers/userController';
import auth from '../middlewares/auth';

const router = new express.Router();

router.post('/users/login', userLogin);

router.post('/users/create', userCreate);

router.post('/users/logout', auth, logoutUser);

router.delete('/users/me', auth, deleteUser);

router.post('/user/add-token', auth, addToken);

export default router;
