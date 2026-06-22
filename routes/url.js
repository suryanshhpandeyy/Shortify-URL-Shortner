const express = require('express');
const router = express.Router();
const {handlePost,Redirect,GetAnalytics} = require('../controller/url');

// Post A New User
router.post('/shorten', handlePost);
// Get Analytics
router.get('/analytics/:ShortID', GetAnalytics);
// Redirect
router.get('/:ShortID', Redirect);


module.exports = router;