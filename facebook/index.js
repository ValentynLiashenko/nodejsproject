const passport = require('passport');
const FacebookStrategy = require('passport-facebook').Strategy
const TokenJWT = require('../helpers/createJWT');
const UserHelpersMethods = require('../helpers/user.methods');

// rewrite this file

//Facebook Keys
const client_id = '301068817482596';
const client_secret = '38e9c73ca4887601818eae514f8388b3';

passport.use(new FacebookStrategy({
    clientID: client_id,
    clientSecret: client_secret,
    callbackURL: "/facebook/callback"
},
function(accessToken, refreshToken, profile, cb) {
    console.log(profile);
    done(null);
  }
));