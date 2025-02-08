const express = require('express');
const path = require("path");
const router = express.Router();

router.use(express.static(path.join(__dirname, '../public/public_html/fathers-day')));

router.get('/', function(req, res, next) {
    res.sendFile(path.join(__dirname, '../public/public_html/fathers-day', 'index.html'));
});

module.exports = router;