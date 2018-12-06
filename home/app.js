const express = require('express');
const router = express.Router(); // eslint-disable-line new-cap

router.get('/', (req, res) => res.render(`${__dirname}/index.pug`));

// TODO(kanslulz): Find an easier way to do static file serving when routing.
router.use('/static', (req, res) => res.sendFile(`${__dirname}/static${req.path}`));

module.exports = router;
