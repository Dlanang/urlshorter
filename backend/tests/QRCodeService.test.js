const QRCodeService = require('../services/QRCodeService');

describe('QRCodeService', () => {
  let service;
  beforeEach(() => {
    service = new QRCodeService();
  });

  it('menghasilkan data URL QR Code yang valid', async () => {
    const shortUrl = 'https://is.gd/abc123';
    const qrDataUrl = await service.generate(shortUrl);
    expect(qrDataUrl).toMatch(/^data:image\/png;base64,/);
  });
});
