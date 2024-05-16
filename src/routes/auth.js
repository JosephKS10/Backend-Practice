const express = require('express');
const router = express.Router();
const passport = require('passport');
const User = require('../database/schemas/User'); // Import your User model


router.post('/register', (req, res) => {
    const { username, email, password } = req.body;
    
    const newUser = new User({ email, username});
  
    User.register(newUser, password, (err, user) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ error: err.message });
      }
      res.status(201).json({ message: 'Registration successful' });
    });
  });
  
  // Login Route
  router.post('/login', passport.authenticate('local', {
    usernameField: 'email', // Specify 'email' as the username field
    passwordField: 'password', // Specify 'password' as the password field
  }), (req, res) => {
    res.json({ message: 'Login successful', user: req.user });
  });
  module.exports = router;