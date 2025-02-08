const express = require('express');

const router = express.Router();

router.get('/api', (req, res) => {
    let cool = {wow: 'wow'};
    res.send(cool);
});
router.get('/', (req, res) => {
    res.render('blog', { title: 'bananaphone blog'});
});

module.exports = router;