const router = require("express").Router();
const cors = require("cors");
const dotenv = require("dotenv").config();

//Controllers
const {
  test,
  signUp,
  Login,
  users,
  userbyID,
  getProfile,
  logout,
} = require("../Controllers/userController");

//schema
const User = require("../models/user");

//middleware
router.use(
  cors({
    credentials: true,
    origin: process.env.ORIGIN,
  })
);

// <-- Routes -->

//test
router.get("/", test);

//POST Sign-Up
router.post("/signup", signUp);

//POST Login
router.post("/login", Login);

//GET Profile
router.get("/profile", getProfile);

// GET all users
router.get("/user", users);

// GET user by ID
router.get("/user/:id", userbyID);

//GET Logout
router.get("/logout", logout);

module.exports = router;
