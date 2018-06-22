const ErrorResponse = require('../models/responses/error');

// Mongo Error catching
module.exports = (err, res) => {
  // check if empty object
  if (Object.keys(err).length === 0 && err.constructor === Object) {
    res.status(500).json(new ErrorResponse('Mongo Error'));
  } else {
    res.status(500).json(new ErrorResponse(err));
  }
};
