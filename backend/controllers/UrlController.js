const express = require('express');
const ShortUrlService = require('../services/ShortUrlService');
const QRCodeService = require('../services/QRCodeService');
const logger = require('../utils/logger');

class UrlController {
  constructor() {
    this.router = express.Router();
    this.shortUrlService = new ShortUrlService();
    this.qrCodeService = new QRCodeService();
    this.initializeRoutes();
  }

  initializeRoutes() {
    // Endpoint: POST /api/shorten
    this.router.post('/shorten', this.shortenUrl.bind(this));
  }

  async shortenUrl(req, res, next) {
    try {
      const { url: originalUrl } = req.body;
      if (!originalUrl || !this.isValidUrl(originalUrl)) {
        return res.status(400).json({ error: 'URL tidak valid.' });
      }
      const shortUrl = await this.shortUrlService.shorten(originalUrl);
      const qrDataUrl = await this.qrCodeService.generate(shortUrl);
      res.json({ originalUrl, shortUrl, qrDataUrl });
    } catch (error) {
      logger.error(`Error di shortenUrl: ${error.message}`);
      next(error);
    }
  }

  isValidUrl(url) {
    try {
      new URL(url);
      return true;
    } catch (err) {
      return false;
    }
  }
}

module.exports = UrlController;
