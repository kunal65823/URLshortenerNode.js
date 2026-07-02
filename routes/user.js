const express = require('express');
const {handleuserSignup} = require('../controllers/user');
const router = express.Router();

// Define your routes here
router.post('/', handleuserSignup);
   

module.exports= router;