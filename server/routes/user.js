const express = require('express');

const router = express.Router();

/* GET user profile. */
router.get('/user', (req, res) => {
  if (!req.user) { res.json({}); return; }

  console.log(req.user);

  res.json(req.user);
});

module.exports = router;
