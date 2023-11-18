const express = require("express");
const session = require("express-session");
const dotenv = require("dotenv").config();
const cors = require("cors");
const cookieParser = require("cookie-parser");
const port = process.env.PORT;

//files
const db = require("./db");
const routes = require("./routes/userRoute");

const app = express();

// middleware
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));

// Set up sessions
app.use(
  session({
    secret: "your-secret-key",
    resave: false,
    saveUninitialized: true,
  })
);

// setup Routes
app.use("/", routes);

// listen Port
app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
