const express = require('express');

const mysql = require('mysql2');

const dbConfig = {
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'blog',
    port: 3306
};

const pool = mysql.createPool(dbConfig);

router = express.Router();

router.get('/blog', (req, res) => {
    const query = 'SELECT * FROM post ORDER BY timestamp DESC';

    pool.query(query, (error, results) => {
        if (error) {
            console.error('Error fetching data:', error);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
        res.json(results);
    });
});
router.get('/blog/:id', (req, res) => {

    const id = req.params.id;

    const query = `SELECT * FROM post WHERE id = ${id} ORDER BY timestamp DESC`;

    pool.query(query, (error, results) => {
        if (error) {
            console.error('Error fetching data:', error);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
        res.json(results);
    });
});

router.get('/projects', (req, res) => {
    const query = 'SELECT * FROM projects ORDER BY id DESC';

    pool.query(query, (error, results) => {
        if (error) {
            console.error('Error fetching data:', error);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
        res.json(results);
    });
});


module.exports = router;