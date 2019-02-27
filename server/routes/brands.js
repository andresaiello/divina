const express = require('express');

const Brand = require('../models/Brand');
const brands = require('./brands.json');

const router = express.Router();

router.get('/brands', async (req, res) => {
  const parsedBrands = brands.map(b => ({
    name: b.name,
    logoUrl: b.logo,
    website: b.url,
  }));

  await Brand.insertMany(parsedBrands);

  console.log('Saved!');

  res.sendStatus(200);
});

module.exports = router;
