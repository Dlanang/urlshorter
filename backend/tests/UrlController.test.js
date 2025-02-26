const UrlController = require('../controllers/UrlController');

describe('UrlController', () => {
  let controller;
  beforeEach(() => {
    controller = new UrlController();
  });

  it('mengembalikan true untuk URL yang valid', () => {
    expect(controller.isValidUrl('https://contoh.com')).toBe(true);
  });

  it('mengembalikan false untuk URL yang tidak valid', () => {
    expect(controller.isValidUrl('not a url')).toBe(false);
  });
});
