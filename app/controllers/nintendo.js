const nintendoService = require('../services/nintendo');
const responses = require('../models/responses');
const mongoCatch = require('../helpers/mongo.error.catch');

const loadNum = (req, res) => {
  nintendoService.loadNum(req.params.num).then(ids => {
    res.status(201).json(new responses.ItemsResponse(ids));
  });
};

const loadAll = (req, res) => {
  nintendoService
    .loadAll()
    .then(ids => {
      res.status(201).json(new responses.ItemsResponse(ids));
    })
    .catch(err => mongoCatch(err, res));
};

module.exports = {
  loadNum,
  loadAll
};
