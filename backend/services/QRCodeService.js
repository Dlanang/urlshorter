const QRCode = require('qrcode');

class QRCodeService {
  async generate(shortUrl) {
    if (!shortUrl) {
      throw new Error('Short URL harus disediakan untuk generate QR Code.');
    }
    try {
      const options = {
        errorCorrectionLevel: 'H',
        type: 'image/png',
        quality: 0.92,
        margin: 1,
        width: 300
      };
      const qrDataUrl = await QRCode.toDataURL(shortUrl, options);
      return qrDataUrl;
    } catch (error) {
      throw new Error(`Error generating QR Code: ${error.message}`);
    }
  }
}

module.exports = QRCodeService;
