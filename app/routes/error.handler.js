// Error handling for routers
module.exports = router => {
  // 404 File Not Found
  router.use('/api/*', (req, res) => {
    res.sendStatus(404);
  });

  // 500 Internal Server Error
  router.use((err, req, res, next) => {
    if (!err) {
      return next();
    }
    console.error(err.stack);
    res.sendStatus(500);
  });
};
