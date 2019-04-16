import express from 'express';
import cheke from 'cheke';
import UserController from '../controllers/UserController';

const router = express.Router();

router.post('/signup', cheke({
  body: {
    fullName: { type: 'required|string|min:5', label: 'Full name' },
    userName: { type: 'string|min:2', label: 'Username' },
    phone: { type: 'required|string|min:7', label: 'Phone number' },
    email: 'required|string|min:7',
    password: 'required|string|min:5',
    isAdmin: 'required|boolean',
  },
}), UserController.signup);

router.post('/login', cheke({
  body: {
    email: 'required|string|min:7',
    password: 'required|string|min:5',
  },
}), UserController.login);

export default router;
