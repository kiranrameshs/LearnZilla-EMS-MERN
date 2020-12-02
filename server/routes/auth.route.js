import express from 'express';
import AuthController from '../controllers/auth.controller';

const router = express.Router();

// post- POST/ login
router.route('/login')
.post(AuthController.loginreq);

// post- POST/ register
router.route('/register')
.post(AuthController.update);


export default router;
