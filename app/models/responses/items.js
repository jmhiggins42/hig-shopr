const SuccessResponse = require('./success');

class ItemsResponse extends SuccessResponse {
  constructor(data) {
    super();
    this.items = data;
  }
}

module.exports = ItemsResponse;
