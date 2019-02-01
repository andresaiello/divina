const express = require('express');

const router = express.Router();
const passport = require('passport');

// Perform the login, after login Auth0 will redirect to callback
router.get('/login', passport.authenticate('auth0', {
  scope: 'openid email profile',
}), (req, res) => {
  res.redirect('/');
});

// Perform the final stage of authentication and redirect to previously requested URL or '/user'
router.get('/callback', (req, res, next) => {
  passport.authenticate('auth0', (error, user, info) => {
    if (error) { next(error); return; }
    if (!user) { res.redirect('/login'); return; }
    req.logIn(user, (err) => {
      if (err) { next(err); return; }
      const { returnTo } = req.session;
      delete req.session.returnTo;
      res.redirect(returnTo || '/feed');
    });
  })(req, res, next);
});

// Perform session logout and redirect to homepage
router.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

module.exports = router;
