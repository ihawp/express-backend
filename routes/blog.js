const express = require('express');

const router = express.Router();


const fethc = () => {
    return fetch('https://www.ihawp.com/projects', {
        headers: 'Content-Type: text/js; ',
        method: 'GET',

    })
}

router.use('/', () => console.log('wow'));
router.get('/', (req, res) => {
    res.render('index', { title: 'bananaphone blog'});
});

module.exports = router;