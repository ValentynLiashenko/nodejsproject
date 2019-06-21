const express = require('express');
const passport = require('passport');

const router = express.Router();

// Facebook login

router.get('/facebook', passport.authenticate('facebook', { scope: 'email' }));

router.get('/facebook/callback/',
    passport.authenticate('facebook', 
        { 
            failureRedirect: '/login' 
        }
    )
);

module.exports = router
