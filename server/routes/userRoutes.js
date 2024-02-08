import express from 'express';
import { admin, protectRoute } from '../middleware/authMiddleware.js';
import { deleteUser, getUsers, googleLogin, loginUser, passwordReset, passwordResetRequest, registerUser, verifyEmail } from '../controller/userController.js';

const userRoutes = express.Router();

userRoutes.route('/login').post(loginUser);
userRoutes.route('/register').post(registerUser);
userRoutes.route('/verify-email').get(protectRoute, verifyEmail);
userRoutes.route('/password-reset-request').post(passwordResetRequest);
userRoutes.route('/password-reset').post(passwordReset);
userRoutes.route('/google-login').post(googleLogin);
userRoutes.route('/').get(protectRoute, admin, getUsers);
userRoutes.route('/:id').delete(protectRoute, admin, deleteUser);

export default userRoutes;