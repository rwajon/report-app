import express from 'express';
import cheke from 'cheke';
import UserController from '../controllers/UserController';

const router = express.Router();

router.post('/signup', cheke({
  body: {
    fullName: 'required|string|min:5',
    userName: 'string|min:2',
    phone: 'required|string|min:7',
    email: 'required|string|min:7',
    password: 'required|string|min:5',
    isAdmin: 'required|boolean',
  },
}), UserController.signup);

export default router;
