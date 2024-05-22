import express from 'express';
import { createUser, getProfile, loginUser } from '../controllers/userController';
import { authenticateJWT } from '../middleware/authMiddleware';

const router = express.Router();

router.post('/', createUser);
router.post('/login', loginUser);
router.get('/profile', authenticateJWT, getProfile);

export default router;