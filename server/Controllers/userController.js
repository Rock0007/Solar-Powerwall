const mongoose = require("mongoose");
const { hashPassword, comparePassword } = require("../helpers/bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/user");

// <-- Controllers -->
//API

//test
const test = async (req, res) => {
  res.json("Test is Working");
};

//Sign-Up
const signUp = async (req, res) => {
  try {
    const { fullName, email, password, confirmPassword, area } = req.body;

    if (password !== confirmPassword) {
      return res.status(400).json({ error: "Passwords do not match" });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: "Email is already registered" });
    }
    const hashedPassword = await hashPassword(password);
    const newUser = new User({
      fullName,
      email,
      password: hashedPassword,
      area,
    });
    const savedUser = await newUser.save();
    res
      .status(201)
      .json({ message: "User registered successfully", user: savedUser });
  } catch (error) {
    console.error(error);
    if (error.code === 11000) {
      return res.status(400).json({ error: "Email is already registered" });
    }
    res.status(500).json({ error: "Internal server error" });
  }
};

// Login Endpoint
const Login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if user exists
    const user = await User.findOne({ email });

    if (!user) {
      // Return a 401 status code for unauthorized access
      return res.status(401).json({
        error: "Invalid credentials.",
      });
    }

    // Check password
    const isPasswordMatch = await comparePassword(password, user.password);

    if (isPasswordMatch) {
      // Generate JWT token
      const token = jwt.sign(
        { email: user.email, id: user._id, name: user.name },
        process.env.JWT_SECRET,
        { expiresIn: "1h" } // Set the expiration time as needed
      );

      // Set the token as an HttpOnly cookie
      res
        .cookie("token", token, {
          httpOnly: true,
          expires: new Date(Date.now() + 3600000),
        })
        .json(user);
    } else {
      return res.status(401).json({
        error: "Invalid credentials.",
      });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      error: "Internal server error. Please try again later.",
    });
  }
};

// Get Profile Endpoint
const getProfile = async (req, res) => {
  const { token } = req.cookies;
  try {
    if (!token) {
      return res.json(null);
    }
    const user = jwt.verify(token, process.env.JWT_SECRET);
    res.json(user);
  } catch (error) {
    console.error(error);

    if (error.name === "JsonWebTokenError") {
      return res.status(401).json({ error: "Invalid token" });
    }
    res.status(500).json({
      error: "Internal server error. Please try again later.",
    });
  }
};

//LogOut
const logout = async (req, res) => {
  res.clearCookie("token").json({ message: "Logout successful" });
};

//GET Users
const users = async (req, res) => {
  try {
    const users = await User.find();

    if (users.length === 0) {
      return res.status(404).json({ message: "No users found" });
    }
    res.status(200).json({ users });
  } catch (error) {
    console.error(error);

    //MongoDB errors
    if (error.name === "MongoError") {
      return res.status(500).json({ error: "MongoDB error" });
    }

    res.status(500).json({ error: "Internal server error" });
  }
};

//GET User/ID
const userbyID = async (req, res) => {
  const userId = req.params.id;
  try {
    //Validate the provided ID
    if (!mongoose.Types.ObjectId.isValid(userId)) {
      return res.status(400).json({ error: "Invalid user ID" });
    }
    //Find the user by ID in the database
    const user = await User.findById(userId);

    // If the user is not found, return a 404 status
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    //Return the user in the response
    res.status(200).json({ user });
  } catch (error) {
    console.error(error);
    //MongoDB errors
    if (error instanceof mongoose.Error.CastError) {
      return res.status(400).json({ error: "Invalid user ID format" });
    } else if (error.name === "MongoError") {
      return res.status(500).json({ error: "MongoDB error" });
    }
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = {
  test,
  signUp,
  Login,
  users,
  userbyID,
  getProfile,
  logout,
};
