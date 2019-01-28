const express = require('express');
const secured = require('../../lib/middleware/secured');

const router = express.Router();

/* GET user profile. */
router.get('/user', (req, res, next) => {
  if (!req.user) {
    res.send(
      JSON.stringify({}, null, 2),
    );

    return next();
  }

  const { _raw, _json, ...userProfile } = req.user;
  res.send(
    JSON.stringify(userProfile, null, 2),
  );
});

module.exports = router;
