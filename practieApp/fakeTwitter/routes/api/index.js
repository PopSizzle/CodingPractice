const router = require('express').Router();

const apiRoutes = require('./api');

router.use('/api', apiroutes);

module.exports = router;