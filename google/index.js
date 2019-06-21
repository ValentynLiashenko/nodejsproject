const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const FacebookStrategy = require('passport-facebook').Strategy
const TokenJWT = require('../helpers/createJWT');
const UserHelpersMethods = require('../helpers/user.methods');

// rewrite this file !!!!!!!!!!!!!!!!!

//Google Keys
const client_secret = '7_wtnDz1I916VlBHt7wB97jc';
const client_id = '173427760327-0e7el3vsgahbut9jbil70akevnc0m2s8.apps.googleusercontent.com';
const redirect_uris = 'http://localhost:5000/users/google/data';




passport.use(
    new GoogleStrategy({
        callbackURL: redirect_uris,
        clientID: client_id,
        clientSecret: client_secret,
        passReqToCallback: true
    }, 
    async (request, accessToken, refreshToken, profile, done) => {
        userEmail = profile.emails[0].value;
        let user = await UserHelpersMethods.GetOrCreate(userEmail, profile.name.givenName);
        let token = await TokenJWT.getToken(user.id);
        done(token);
      })
);

