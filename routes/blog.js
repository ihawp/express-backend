const express = require('express');

const router = express.Router();

const fetch = require('node-fetch');

const pug = require('pug');

router.get('/', (req, res) => {
    res.render('blog', { title: 'bananaphone blog'});
});

router.get('/:id', (req, res) => {

    const sFetch = async (url) => {
        const response = await fetch(url);
        return await response.json();
    }
    sFetch(`http://localhost:3000/api/blog/${req.params.id}`)
        .then(response => {
            response = response[0];
            res.render('blog-post', { id: response.id, title: response.title, content: response.content, timestamp: response.timestamp});
        });

});

module.exports = router;