import express from "express";

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
router.route('/').post(registerUser).get(getUsers);
router.post('/auth', authUser); //kahi jana ni h bas logout hona h 
router.post('/login',authUser);
router.route('/profile').get(getUserProfile).put(updateUserProfile);
router.route('/:id').delete(deleteUser).get(getUserById).put(updateUser);

export default router;
