const express = require('express');
const router = express.Router();
const {handleSignUp,handleLogIn} = require('../controller/users');

// Post A New User
router.post('/signup', handleSignUp);
// Old User
router.post('/login', handleLogIn);

module.exports = router;