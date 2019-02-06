const express = require('express');

const router = express.Router();
router.get('/login', (req, res) => {
  const ret = {};
  res.send(
    JSON.stringify(ret),
  );
});

module.exports = router;
