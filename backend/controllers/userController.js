
import asyncHandler from "../middleware/asyncHandler.js";
import User from "../models/userModel.js";
//@DESC Auth user & get token
//@route GET /api/users/login
//@access Public
const authUser= asyncHandler(async (req, res) => {
    res.send('AUTH user');

});
//@DESC Register user 
//@route POST /api/users
//@access Public
const registerUser= asyncHandler(async (req, res) => {
    res.send('Register user');

});


//@DESC Logout user / clear cookie
//@route POST /api/users/logout
//@access Public
const logoutUser= asyncHandler(async (req, res) => {
    res.send('logout user');

});

//@DESC Get user profile
//@route GET /api/users
//@access Public
const getUserProfile= asyncHandler(async (req, res) => {
    res.send('get user profile');

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