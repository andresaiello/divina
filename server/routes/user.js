const express = require('express');
const secured = require('../middleware/secured');

const router = express.Router();

/* GET user profile. */
router.get('/user', (req, res) => {
  if (!req.user) {
    res.send(
      JSON.stringify({}, null, 2),
    );

    return;
  }

  const { _raw, _json, ...userProfile } = req.user;
  res.send(
    JSON.stringify({ user: userProfile }, null, 2),
  );
});

module.exports = router;
