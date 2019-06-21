const express = require('express');
const passport = require('passport');

const userController = require('../controllers/user.controler');
const authController = require('../controllers/auth.controler');
const { isAuthenticated, tokenVerify } = require('../middleware/index');

const router = express.Router();

// Google login
router.get('/google', passport.authenticate('google', {
    scope: ['profile', 'email']
}));
router.get('/google/data', 
    passport.authenticate( 'google', { 
        successRedirect: 'users/login',
        failureRedirect: '/auth/google/failure'
}));

router.get("/", tokenVerify, isAuthenticated, userController.getAll);
router.get("/:id", tokenVerify, isAuthenticated, userController.getOne);
router.post('/', authController.createUser);
router.post('/login', authController.loginUser);


module.exports = router