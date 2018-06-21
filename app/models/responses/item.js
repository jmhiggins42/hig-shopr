const SuccessResponse = require('./success');

class ItemResponse extends SuccessResponse {
  constructor(data) {
    super();
    this.item = data;
  }
}

module.exports = ItemResponse;
