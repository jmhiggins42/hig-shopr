const { connection } = require('../mongodb.connection');
const { games } = require('../nintendo-06-19-2018.json');
const arrToObj = require('../helpers/utilities');

const hashTable = arrToObj(games);

const loadNum = num => {
  return connection
    .db()
    .collection('nintendo2')
    .insertMany(Object.values(hashTable).slice(0, num))
    .then(result => result.insertedIds);
};

const loadAll = () => {
  return connection
    .db()
    .collection('nintendo2')
    .insertMany(Object.values(hashTable))
    .then(result => result.insertedIds);
};

module.exports = {
  loadNum,
  loadAll
};
