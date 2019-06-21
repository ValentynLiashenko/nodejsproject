const passport = require('passport');
const FacebookStrategy = require('passport-facebook').Strategy
const TokenJWT = require('../helpers/createJWT');
const UserHelpersMethods = require('../helpers/user.methods');

const keys = require('../config/keys/keys');

const redirect_url = "http://localhost:5000/auth/facebook/callback"

passport.use(new FacebookStrategy({
    clientID: keys.facebook_client_id,
    clientSecret: keys.facebook_client_secret,
    callbackURL: redirect_url,
    passReqToCallback: true,
    profileFields: ['emails', 'name']
},
async (req, accessToken, refreshToken, public_profile, done) => {
    let user = await UserHelpersMethods.GetOrCreate(
        public_profile.emails[0].value, 
        public_profile.name.givenName
    );
    let token = await TokenJWT.getToken(user.id);
    done(token);
  }
));