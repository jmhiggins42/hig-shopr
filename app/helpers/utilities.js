// convert array to object
module.exports = arr =>
  arr.reduce((acc, curr) => {
    acc[curr._id] = curr;
    return acc;
  }, {});
