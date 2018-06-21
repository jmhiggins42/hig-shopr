const ErrorResponse = require('../models/responses/error');

// Mongo Error catching
module.exports = (err, res) => {
  // check if empty object
  if (Object.keys(obj).length === 0 && obj.constructor === Object) {
    res.status(500).json(new ErrorResponse('Mongo Error'));
  } else {
    res.status(500).json(new ErrorResponse(err));
  }
};
