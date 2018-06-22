const gamesService = require('../services/library');
const responses = require('../models/responses');
const mongoCatch = require('../helpers/mongo.error.catch');

const create = (req, res) => {
  gamesService
    .create(req.model)
    .then(id => {
      res.status(201).json(new responses.ItemResponse(id));
    })
    .catch(err => mongoCatch(err, res));
};

const update = (req, res) => {
  gamesService
    .update(req.params.id, req.model)
    .then(() => {
      res.status(203).json(new responses.SuccessResponse());
    })
    .catch(err => mongoCatch(err, res));
};

const getAll = (req, res) => {
  gamesService
    .getAll()
    .then(docs => {
      res.status(200).json(new responses.ItemsResponse(docs));
    })
    .catch(err => mongoCatch(err, res));
};

const getById = (req, res) => {
  gamesService
    .getById(req.params.id)
    .then(doc => {
      res.status(200).json(new responses.ItemResponse(doc));
    })
    .catch(err => mongoCatch(err, res));
};

const _delete = (req, res) => {
  gamesService
    .delete(req.params.id)
    .then(() => {
      res.status(200).json(new responses.SuccessResponse());
    })
    .catch(err => mongoCatch(err, res));
};

module.exports = {
  create,
  update,
  getAll,
  getById,
  delete: _delete
};
