const BaseResponse = require('./base');

class SuccessResponse extends BaseResponse {
  constructor() {
    this.isSuccessful = true;
    this.alert.type = 'success';
  }
}

module.exports = SuccessResponse;
