import express from 'express';
import { login, register } from '../controllers/authController.js'; 



const router = express.Router();

// Register
router.post('/register', register);

// Login
router.post('/login', login);

export default router;
