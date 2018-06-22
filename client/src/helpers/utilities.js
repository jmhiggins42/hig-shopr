exports.arrToObj = arr =>
  arr.reduce((acc, curr) => {
    acc[curr._id] = curr;
    return acc;
  }, {});
