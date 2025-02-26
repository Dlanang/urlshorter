const logger = require('./logger');

function errorHandler(err, req, res, next) {
  // Log detail error untuk debugging
  logger.error(err.stack);
  res.status(500).json({ error: 'Internal Server Error' });
}

module.exports = errorHandler;
