const express = require('express');
const path = require("path");
const router = express.Router();

router.use(express.static(path.join(__dirname, '../public/public_html/public')));

router.get(['/', '/roadmap', '/privacy'], function(req, res, next) {
  res.sendFile(path.join(__dirname, '../public/public_html/public', 'index.html'));
});

router.get('/robots.txt', function (req, res) {
  res.type('text/plain');
  res.send("User-agent: *\nDisallow: /fathers-day\nDisallow: /gracie\nAllow: /public/index.html");
});

module.exports = router;