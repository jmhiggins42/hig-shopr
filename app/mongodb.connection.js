const { MongoClient, ObjectId } = require('mongodb');

let _db = null;

const connect = (url, dbName) => {
  if (_db !== null) {
    return Promise.resolve(_db);
  }

  return MongoClient.connect(url).then(client => {
    _db = client.db(dbName);
  });
};

module.exports = {
  connect,
  connection: { db: () => _db },
  ObjectId
};
