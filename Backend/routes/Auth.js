const router = require("express").Router();
const User = require("../models/user");
const bcrypt = require("bcryptjs");
//SIGN UP
router.post("/register", async (req, res) => {
  try {
    const { email, name, password } = req.body;
    console.log(req.body);
    const user = new User({ email, name, password });
    const savedUser = await user.save(); // Use a different variable name, e.g., savedUser
    console.log(savedUser, "log");
    res.status(201).json({ message: "User successfully registered" });
  } catch (error) {
    res
      .status(400)
      .json({ message: "User registration failed", error: error.message });
  }
});

//SIGN IN

router.post("/signin", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res
        .status(400)
        .json({ message: "User not found. Please Sign Up First" });
    }

    if (req.body.password != user.password) {
      return res.status(400).json({ message: "Password is not correct" });
    }

    const { password, ...others } = user._doc;
    res.status(200).json({ user: others });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

module.exports = router;
