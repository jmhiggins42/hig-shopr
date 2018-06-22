const BaseResponse = require('./base');

class SuccessResponse extends BaseResponse {
  constructor() {
    super();
    this.isSuccessful = true;
    this.alert.type = 'success';
  }
}

module.exports = SuccessResponse;
