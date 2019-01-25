const express = require('express');

const router = express.Router();
router.get('/login', (req, res) => {
  console.log('hola');
  const ret = {};
  res.send(
    JSON.stringify(ret),
  );
});

module.exports = router;
