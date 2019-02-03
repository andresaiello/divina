const Passport = require('passport');
const Auth0Strategy = require('passport-auth0');

const { PORT } = require('./config');
const User = require('./models/User');

const setupPassport = (passport) => {
  // Configure Passport to use Auth0
  passport.use(new Auth0Strategy({
    domain: process.env.AUTH0_DOMAIN || 'divinaapp.eu.auth0.com',
    clientID: process.env.AUTH0_CLIENT_ID || 'wn37BZhm1Zx-l2_B1D7oJJHJgm7R6dhc',
    clientSecret: process.env.AUTH0_CLIENT_SECRET || 'WdVYhMdzI95F4axV_hi0AqZS9V-GGY6PzBpd9ni32z2i0RAp4ptoZBL-RPeIZdi_',
    callbackURL: process.env.AUTH0_CALLBACK_URL || `http://localhost:${PORT}/callback`,
  }, (async (accessToken, refreshToken, profile = {}, done) => {
    // https://auth0.com/docs/users/concepts/overview-user-profile#data-normalization
    try {
      const jsonProfile = profile._json;
      // this method allows the user to login into the same email with any method (fb, gmail)
      // @todo: prevent that, it's insecure
      const existingUser = await User.findByEmail(jsonProfile && jsonProfile.email);
      if (existingUser) { done(null, existingUser); return; }
      const newUser = await User.createFromAuth0(jsonProfile);
      done(null, newUser);
    } catch (e) {
      done(null, false, { message: e.message });
      console.log(e);
    }
  })));

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
