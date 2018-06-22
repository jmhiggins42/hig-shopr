const router = require('express').Router();
const libraryRoutes = require('./library');
const nintendoRoutes = require('./nintendo');
const errorHandler = require('./error.handler');

module.exports = router;

router.use('/api/library', libraryRoutes);
router.use('/api/nintendo', nintendoRoutes);

errorHandler(router);
