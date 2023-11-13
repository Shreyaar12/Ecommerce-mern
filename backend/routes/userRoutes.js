import express from "express";
import { protect, admin } from '../middleware/authMiddleware.js';

import {authUser,
    registerUser,
    logoutUser,
    getUserProfile,
    updateUserProfile,
    getUsers,
    deleteUser,
    getUserById,
    updateUser} from '../controllers/userController.js';
const router= express.Router();
//everything connected to /api/users
router.route('/').post(registerUser).get(protect, admin, getUsers);
router.post('/auth', authUser); //kahi jana ni h bas logout hona h 
router
  .route('/profile')
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile);
router
  .route('/:id')
  .delete(protect, admin, deleteUser)
  .get(protect, admin, getUserById)
  .put(protect, admin, updateUser);


export default router;
