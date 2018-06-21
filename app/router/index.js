const router = require('express').Router();
const libraryRoutes = require('./library');
const errorHandler = require('./error.handler');

module.exports = router;

router.use('/api/library', libraryRoutes);

errorHandler(router);
