
import asyncHandler from "../middleware/asyncHandler.js";
import User from "../models/userModel.js";
import jwt from 'jsonwebtoken';
//@DESC Auth user & get token
// @route   POST /api/users/auth
//@access Public
const authUser= asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
  
    if (user && (await user.matchPassword(password))) {
        const token= jwt.sign({
            userId:user._id},
            process.env.JWT_SECRET,{
                expiresIn:'30d',
            });

      //set JWT as HTTP-Only cookie
      res.cookie('jwt',token,{
        httpOnly:true,
        secure:process.env.NODE_ENV !== 'development',
        sameSite: 'strict',
        maxAge: 30*24*60*60*1000 //30 days
      });
      res.json({
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