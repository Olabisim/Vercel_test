import express from 'express';
import { businessLogin, businessSignup, clientLogin } from '../controllers/authController.js';
import { requestPasswordReset, resetPassword } from '../services/auth.service.js';

const router = express.Router();

router.post('/business/signup', businessSignup)
router.post('/business/login', businessLogin)
// router.post('/client/signup', clientSignup)
router.post('/client/login', clientLogin)

// password reset

router.post('/user/request/resetPassword', requestPasswordReset)
router.post('/user/resetPassword', resetPassword)

export default router;