const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");

// REGISTER
// adding something to the DB
router.post("/register", async (req, res) => {
  // registering new user and saving body (username, email , password)
  try {
    // encrypt the password for safer storage
    const salt = await bcrypt.genSaltSync(10);
    const hashedPassword = await bcrypt.hashSync(req.body.password, salt);

    // how the new user is saved
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword,
    });

    // saving new user
    const user = await newUser.save();
    res.status(200).json(user);

    // sending response (error message)
  } catch (err) {
    res.status(500).json(err);
  }
});

// LOGIN
router.post("/login", async (req, res) => {
  try {
    //   try finding the one unique user
    const user = await User.findOne({ username: req.body.username });
    !user && res.status(400).json("The username or password is incorrect!");

    const validated = await bcrypt.compare(req.body.password, user.password);
    !validated &&
      res.status(400).json("The username or password is incorrect!");
    // everything other than password is shown
    const { password, ...others } = user._doc;
    res.status(200).json(others);
    // if not found, return error message
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
