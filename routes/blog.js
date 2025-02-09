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
            res.render('blog', { title: 'Blog | ihawp.com', content: response });
        })
        .catch(error => console.error(error));
});

router.get('/:id', (req, res) => {

    sFetch(`http://localhost:3000/api/blog/${req.params.id}`)
        .then(response => {
            response = response[0];
            res.render('blog-post', { title: response.title + ' | ihawp.com', id: response.id, postTitle: response.title, content: JSON.parse(response.content), timestamp: response.timestamp, author: response.author, github: response.github, url: response.url });
        })
        .catch(error => console.error(error));

});

module.exports = router;