const router = require('express').Router();
const libraryController = require('../controllers/library');

const GameCreate = require('../models/library.create');
const GameUpdate = require('../models/library.update');
const validateBody = require('../filters/validate.body');

module.exports = router;

router.post('/', validateBody(GameCreate), libraryController.create);
router.put('/:id([0-9a-fA-F]{24})', validateBody(GameUpdate), libraryController.update);
router.get('/', libraryController.getAll);
router.get('/:id([0-9a-fA-F]{24})', libraryController.getById);
router.delete('/:id([0-9a-fA-F]{24})', libraryController.delete);
