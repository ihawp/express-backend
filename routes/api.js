const express = require('express');

const mysql = require('mysql2');

const dbConfig = require('../middleware/dbconfig');

const pool = mysql.createPool(dbConfig);

router = express.Router();

router.get('/blog', (req, res) => {
    const query = 'SELECT id, title FROM post ORDER BY timestamp DESC';

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
            return res.status(500).json({ id: 'Internal Server Error' });
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