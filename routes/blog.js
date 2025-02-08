const express = require('express');

const router = express.Router();

const mysql = require('mysql2');

const dbConfig = {
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'blog',
    port: 3306
};

const pool = mysql.createPool(dbConfig);

router.get('/api', (req, res) => {
    const query = 'SELECT * FROM post ORDER BY timestamp DESC';

    pool.query(query, (error, results) => {
        if (error) {
            console.error('Error fetching data:', error);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
        res.json(results);
    });
});
router.get('/', (req, res) => {
    res.render('blog', { title: 'bananaphone blog'});
});

module.exports = router;