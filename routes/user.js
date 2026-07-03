const express = require('express');
const {handleuserSignup,handleuserlogin} = require('../controllers/user');
const router = express.Router();

// Define your routes here
router.post('/', handleuserSignup);
router.post('/login', handleuserlogin);

module.exports= router;