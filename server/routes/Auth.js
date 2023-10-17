const express = require('express');
const { login, signup, logout } = require("../controllers/authController.js");

const router = express.Router();

// Login route
router.post("/login", login);

// Signup route
router.post("/signup", signup);


router.post("/logout",logout)


module.exports = router; // Note the corrected export statement