const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
const UrlController = require('./controllers/UrlController');
const logger = require('./utils/logger');
const errorHandler = require('./utils/errorHandler');

const app = express();
const port = process.env.PORT || 4000;

// Security middleware
app.use(helmet());
app.use(cors());

// Rate limiting middleware
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 menit
  max: 100                  // maksimal 100 permintaan per window
});
app.use(limiter);

// Middleware built-in untuk parsing JSON & URL-encoded
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Inisialisasi controller & routing API
const urlController = new UrlController();
app.use('/api', urlController.router);

// Global error handler
app.use(errorHandler);

app.listen(port, () => {
  logger.info(`Server berjalan di http://localhost:${port}`);
});
