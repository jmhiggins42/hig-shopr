const { connection, ObjectId } = require('../mongodb.connection');

const create = model => {
  model.gameId = ObjectId(model.gameId);

  return connection
    .db()
    .collection('library')
    .insertOne(model)
    .then(result => result.insertedId);
};

const update = () => {};

const getAll = () => {};

const getById = () => {};

const _delete = () => {};

module.exports = {
  create,
  update,
  getAll,
  getById,
  delete: _delete
};
