const userController = require('../controllers/user.controler');
const authController = require('../controllers/auth.controler');
const express = require('express');
const router = express.Router();
const { isAuthenticated, tokenVerify } = require('../middleware/index');
const passport = require('passport');

// Google login
router.get('/google', passport.authenticate('google', {
    scope: ['profile', 'email']
}));
router.get('/google/data', 
    passport.authenticate( 'google', { 
        successRedirect: 'users/login',
        failureRedirect: '/auth/google/failure'
}));

// Facebook login
router.get('/facebook',
  passport.authenticate('facebook'));

router.get('/facebook/callback',
  passport.authenticate('facebook', { failureRedirect: '/login' }),
  function(req, res) {
      console.log(req)
    // Successful authentication, redirect home.
    res.redirect('/');
  });

router.get('/test', authController.test);
router.get("/", tokenVerify, isAuthenticated, userController.getAll);
router.get("/:id", tokenVerify, isAuthenticated, userController.getOne);
router.post('/', authController.createUser);
router.post('/login', authController.loginUser);




module.exports = router