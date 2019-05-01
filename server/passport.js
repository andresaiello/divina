const Passport = require('passport');
const Auth0Strategy = require('passport-auth0');
const getConfig = require('../next.config.js');

const {
  AUTH0_DOMAIN,
  AUTH0_CLIENT_ID,
  AUTH0_CLIENT_SECRET,
  AUTH0_CALLBACK_URL,
} = getConfig.serverRuntimeConfig;

const User = require('./models/User');

const setupPassport = passport => {
  // Configure Passport to use Auth0
  passport.use(
    new Auth0Strategy(
      {
        domain: AUTH0_DOMAIN,
        clientID: AUTH0_CLIENT_ID,
        clientSecret: AUTH0_CLIENT_SECRET,
        callbackURL: AUTH0_CALLBACK_URL,
      },
      async (accessToken, refreshToken, profile = {}, done) => {
        // https://auth0.com/docs/users/concepts/overview-user-profile#data-normalization
        try {
          const jsonProfile = profile._json;
          // this method allows the user to login into the same email with any method (fb, gmail)
          // @todo: prevent that, it's insecure
          const existingUser = await User.findByEmail(jsonProfile && jsonProfile.email);
          if (existingUser) {
            done(null, existingUser);
            return;
          }
          const newUser = await User.createFromAuth0(jsonProfile);
          done(null, newUser);
        } catch (e) {
          done(null, false, { message: e.message });
          console.log(e);
        }
      },
    ),
  );

  // You can use this section to keep a smaller payload
  passport.serializeUser((user, done) => {
    done(null, user);
  });

  passport.deserializeUser((user, done) => {
    done(null, user);
  });

  return passport;
};

module.exports = () => setupPassport(Passport);
