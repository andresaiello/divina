const express = require('express');

const router = express.Router();
router.get('/login', (req, res) => {
  const ret = {};
  res.send(
    JSON.stringify(ret),
  );
});

router.get('/google/:text', (req, res) => {
  const puppeteerGoogleScraper = require('puppeteer-google-scraper');

  puppeteerGoogleScraper(req.params.text, {
    limit: 20,
    headless: true,
  }).then((d) => {
    res.send(
      JSON.stringify(d),
    );
    console.log(d);
    // [ { title: 'Why Node.js is cool – Andrew Winstead – Medium',
    //     url: 'https://medium.com/@awinste/why-node-js-is-cool-a61710eec906' },
    //   { title: 'Why Node.js Is Totally Awesome - Chetan Surpur',
    //     url: 'http://chetansurpur.com/blog/2010/10/why-node-js-is-totally-awesome.html' },
    //   ...  ]
  }).catch((err) => {
    console.error(err);
  });
});

module.exports = router;
