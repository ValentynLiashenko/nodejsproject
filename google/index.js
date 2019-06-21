const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const FacebookStrategy = require('passport-facebook').Strategy
const TokenJWT = require('../helpers/createJWT');
const UserHelpersMethods = require('../helpers/user.methods');

const Keys = require('../config/keys/keys');

passport.use(
    new GoogleStrategy({
        callbackURL: Keys.google_redirect_uris,
        clientID: Keys.google_client_id,
        clientSecret: Keys.google_client_secret,
        passReqToCallback: true
    }, 
    async (request, accessToken, refreshToken, profile, done) => {
        try{    
            var user = await UserHelpersMethods.GetOrCreate(profile.emails[0].value, profile.name.givenName, profile.name.familyName);
            var token = await TokenJWT.getToken(user.id);
        } catch (error) {
            console.log('Error')
        }
        return done(token);
      })
);

