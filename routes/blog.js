const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');

const sFetch = async (url) => {
    const response = await fetch(url);
    return await response.json();
}

router.get('/', (req, res) => {
    sFetch('http://localhost:3000/api/blog')
        .then(response => {
            res.render('blog', { title: 'bananaphone blog', content: response });
        })
        .catch(error => console.error(error));
});

router.get('/:id', (req, res) => {

    sFetch(`http://localhost:3000/api/blog/${req.params.id}`)
        .then(response => {
            response = response[0];
            console.log(response.id);
            res.render('blog-post', { id: response.id, title: response.title, content: response.content, timestamp: response.timestamp});
        })
        .catch(error => console.error(error));

});

module.exports = router;