const { connection, ObjectId } = require('../mongodb.connection');

const create = model => {
  return connection
    .db()
    .collection('library')
    .insertOne(model)
    .then(result => result.insertedId);
};

const update = (id, model) => {
  model._id = ObjectId(model._id);

  return connection
    .db()
    .collection('library')
    .updateOne({ _id: ObjectId(id) }, { $set: model })
    .then(result => {
      console.log('UPDATE result:', result);
      return result;
    });
};

const getAll = () => {
  return connection
    .db()
    .collection('library')
    .find({})
    .toArray();
};

const getById = id => {
  return connection
    .db()
    .collection('library')
    .findOne({ _id: ObjectId(id) });
};

const _delete = id => {
  return connection
    .db()
    .collection('library')
    .deleteOne({ _id: ObjectId(id) })
    .then(response => {
      if (response.result.ok === 1) {
        return Promise.resolve(response.deletedCount);
      } else {
        return Promise.reject();
      }
    });
};

module.exports = {
  create,
  update,
  getAll,
  getById,
  delete: _delete
};
