const express = require('express');
const router = express.Router();
const mysql = require('mysql2');



router.get('/', (req, res) => {
    res.render('index', { title: 'wow' });
});


module.exports = router;