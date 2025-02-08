const express = require('express');
const path = require("path");
const router = express.Router();

router.use(express.static(path.join(__dirname, '../public/public_html/gracie')));

router.get('/', function(req, res, next) {
    res.sendFile(path.join(__dirname, '../public/public_html/gracie', 'index.html'));
});

module.exports = router;