const express = require('express');
const router = express.Router();
const nFetch = require('../middleware/nFetch');
const marked = require('marked');

router.get('/', (req, res) => {
    nFetch('https://ihawp.com/api/blog')
        .then(response => {
            res.render('blog', { title: 'Blog | ihawp.com', content: response });
        })
        .catch(error => console.error(error));
});

router.get('/:id', (req, res) => {
    nFetch(`https://ihawp.com/api/blog/${req.params.id}`)
        .then(response => {
            response = response[0];
            response.content = JSON.parse(response.content);
            response.content.forEach((item, key) => response.content[key] = marked.parse(item));

            res.render('blog-post', { title: response.title + ' | ihawp.com', id: response.id, postTitle: response.title, content: response.content, timestamp: response.timestamp, author: response.author, github: response.github, url: response.url });
        })
        .catch(error => console.error(error));

});

module.exports = router;