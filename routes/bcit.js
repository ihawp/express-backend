const express = require('express');
const router = express.Router();
const path = require('path');


router.get('/', (req, res) => {
  res.render('bcit',{ title: 'BCIT Front End Web Developer Certificate' });
});

router.use(express.static(path.join(__dirname, '../public/public_html/bcit')));

router.get('/web-dev-1/landing-page', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/public_html/bcit/landing-page/', 'index.html'));
});

router.get('/web-dev-1/a:id', (req, res) => {
  res.sendFile(path.join(__dirname, `../public/public_html/bcit/wd1-a${req.params.id}/`, 'index.html'));
});

router.get('/web-scripting-1/a3/bonus-:id', (req, res) => {
  res.sendFile(path.join(__dirname, `../public/public_html/bcit/ws1-a3-bonus-${req.params.id}/`, 'index.html'));
});

router.get('/web-scripting-1/a:id', (req, res) => {
  res.sendFile(path.join(__dirname, `../public/public_html/bcit/ws1-a${req.params.id}/`, 'index.html'));
});


module.exports = router;
