export const arrToObj = arr =>
  arr.reduce((acc, curr, i) => {
    acc[curr._id || i] = curr;
    return acc;
  }, {});
