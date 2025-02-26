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
      const { url } = req.body;

      // Validasi input URL
      if (!url) {
        logger.warn('URL tidak diberikan dalam payload.');
        return res.status(400).json({ error: 'URL harus disediakan.' });
      }
      if (!this.isValidUrl(url)) {
        logger.warn(`URL tidak valid: ${url}`);
        return res.status(400).json({ error: 'Format URL tidak valid.' });
      }

      // Logging request masuk (siap mempersingkat URL yang panjang seperti cerita mantan 😉)
      logger.info(`Menerima permintaan shorten URL untuk: ${url}`);

      // Buat short URL dan QR Code
      const shortUrl = await this.shortUrlService.shorten(url);
      logger.info(`Short URL berhasil dibuat: ${shortUrl}`);

      const qrDataUrl = await this.qrCodeService.generate(shortUrl);
      logger.info(`QR Code berhasil dibuat untuk: ${shortUrl}`);

      res.json({ originalUrl: url, shortUrl, qrDataUrl });
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
