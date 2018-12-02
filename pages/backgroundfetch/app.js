const express = require('express');
const router = express.Router(); // eslint-disable-line new-cap

// Redirect to backgroundfetch.com until this is up and running.
router.get('/', (req, res) => res.redirect('https://backgroundfetch.com'));

module.exports = router;
