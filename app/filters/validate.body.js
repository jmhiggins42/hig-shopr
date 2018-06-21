// validate against JOI object model
module.exports = (model, options = null) => (req, res, next) => {
  // validation w/ options
  const result = model.validate(req.body, options);

  // check for error
  if (result.error) {
    console.log(result.error);
    res.status(400).json(result.error);
    return;
  }

  // save to req.model
  req.model = result.value;
  next();
};
