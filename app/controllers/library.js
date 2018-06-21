const gamesService = require('../services/library');
const responses = require('../models/responses');
const mongoCatch = require('../helpers/mongo.error.catch');

const create = (req, res) => {
  gamesService
    .create(req.model)
    .then(id => {
      res.status(203).json(new responses.ItemResponse(id));
    })
    .catch(err => mongoCatch(err, res));
};

const update = (req, res) => {};

const getAll = (req, res) => {};

const getById = (req, res) => {};

const _delete = (req, res) => {};

module.exports = {
  create,
  update,
  getAll,
  getById,
  delete: _delete
};
