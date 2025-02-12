const express = require('express');
const router = express.Router();

const nFetch = require('../middleware/nFetch');


/*
router.use(express.static(path.join(__dirname, '../public/public_html/public')));
router.get(['/', '/roadmap', '/privacy'], function(req, res, next) {
  res.sendFile(path.join(__dirname, '../public/public_html/public', 'index.html'));
});
*/

router.get('/', (req, res) => {
  nFetch('https://www.ihawp.com/api/projects')
      .then(response => {

          console.log(response[0].languages);

          res.render('index', { title: 'Warren Chemerika | ihawp.com', content: response });
      })
      .catch(error => console.error(error));
});



router.get('/privacy', (req, res) => {
  res.render('privacy', { content: 'wow' });
});

module.exports = router;