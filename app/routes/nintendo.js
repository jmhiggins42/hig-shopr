const router = require('express').Router();
const nintendoController = require('../controllers/nintendo');

module.exports = router;

// turned off for now...

router.post('/:num', nintendoController.loadNum);
router.post('/', nintendoController.loadAll);
