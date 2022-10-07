// import { request } from "express";
const User = require("../models/userModel");
const generateToken = require("../config/generateToken")
const asyncHandler = require("express-async-handler");

const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password, pic } = req.body;

  if (!name || !email || !password) {
    res.status(400);
    throw new Error("Please enter all the fields");
  }
  // Here, "User" is the model that we have created
  const userExists = await User.findOne({ email });
  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }

  const user = await User.create({
    name,
    email,
    password,
    pic,
  });
  // something is in the user means the operation is completed
  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      pic: user.pic,

      // when a user is registered we also want a JWT Token to be sent
      token: generateToken(user._id),
    });
  }else{
    res.status(400);
    throw new Error("Failed to create the User");
  }
});

module.exports = {registerUser};