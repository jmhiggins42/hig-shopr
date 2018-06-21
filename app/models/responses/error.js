const BaseResponse = require('./base');

class ErrorResponse extends BaseResponse {
  constructor(err) {
    super();
    this.errors = err;
    this.alert.message = err.message || null;
    this.alert.type = 'danger';
  }
}

module.exports = ErrorResponse;
