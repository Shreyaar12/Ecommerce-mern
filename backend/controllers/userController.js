
import asyncHandler from "../middleware/asyncHandler.js";
import User from "../models/userModel.js";
import jwt from 'jsonwebtoken';
import generateToken from '../utils/generateToken.js'
//@DESC Auth user & get token
// @route   POST /api/users/auth
//@access Public
const authUser= asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
  
    if (user && (await user.matchPassword(password))) {
       generateToken(res,user._id) 
      res.status(200).json({
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
      });
    } else {
      res.status(401);
      throw new Error('Invalid email or password');
    }
});
//@DESC Register user 
//@route POST /api/users
//@access Public
const registerUser= asyncHandler(async (req, res) => {
    const {name, email, password}=req.body;
    const userExists = await User.findOne({email});
    if (userExists){
        res.status(400);
        throw new Error('User already exists')
    }
    const user= await User.create({
        name,email,password
    })
    if (user){
        generateToken(res,user._id) 
        res.status(201).json({
            _id: user._id,
            name:user.name,
            email:user.email,
            isAdmin: user.isAdmin
        })
    } else{
        res.status(400);
        throw new Error('Invalid User details')
    }


});


//@DESC Logout user / clear cookie
//@route POST /api/users/logout
//@access Public
const logoutUser= asyncHandler(async (req, res) => {
    res.cookie('jwt', '', {
        httpOnly: true,
        expires: new Date(0),
      });
      res.status(200).json({ message: 'Logged out successfully' });
    });

//@DESC Get user profile
//@route GET /api/users
//@access Public
const getUserProfile= asyncHandler(async (req, res) => {
    const user= await User.findByid(req.user._id);
    if (user){
        res.status(200).json({
            _id: user._id,
            name:user.name,
            email:user.email,
            isAdmin: user.isAdmin
        })
    }else{
        res.status(404)
        throw new Error('User not found')

    }

});
//@DESC Update user profile
//@route put /api/users for updating use put
//@access Private
const updateUserProfile= asyncHandler(async (req, res) => {
    res.send('update user profile');

});

// @desc    Get all users
// @route   GET /api/users
// @access  Private/Admin
const getUsers = asyncHandler(async (req, res) => {
    res.send('get users');
  });
// @desc    Get user by ID
// @route   GET /api/users/:id
// @access  Private/Admin
const getUserById = asyncHandler(async (req, res) => {
    res.send('get user by id');
  });
//@DESC Delete Users
//@route DELETE /api/users/:id
//@access Private/Admin
const deleteUser= asyncHandler(async (req, res) => {
    res.send('delete user ');

});
//@DESC Update Users
//@route    PUT /api/users/:id
//@access Private/Admin
const updateUser= asyncHandler(async (req, res) => {
    res.send('update user ');

});
export {
    authUser,
    registerUser,
    logoutUser,
    getUserProfile,
    updateUserProfile,
    getUsers,
    deleteUser,
    getUserById,
    updateUser,
  };