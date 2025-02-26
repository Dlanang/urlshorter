// tests/ShortUrlService.test.js
const TinyURL = require('tinyurl');
const ShortUrlService = require('../services/ShortUrlService');

describe('ShortUrlService', () => {
  let service;

  beforeEach(() => {
    service = new ShortUrlService();
  });

  it('mengembalikan short URL ketika API merespon dengan sukses', async () => {
    const fakeShortUrl = 'https://tinyurl.com/fake123';
    const originalShorten = TinyURL.shorten;
    TinyURL.shorten = (url, cb) => {
      cb(fakeShortUrl);
    };

    const result = await service.shorten('https://contoh.com');
    expect(result).toBe(fakeShortUrl);

    // Kembalikan method asli
    TinyURL.shorten = originalShorten;
  });

  it('melempar error ketika API mengembalikan pesan error', async () => {
    const originalShorten = TinyURL.shorten;
    TinyURL.shorten = (url, cb) => {
      cb('Error: Something went wrong');
    };

    await expect(service.shorten('https://contoh.com')).rejects.toThrow('API Error');
    
    // Kembalikan method asli
    TinyURL.shorten = originalShorten;
  });
});
