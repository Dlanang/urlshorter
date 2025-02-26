const axios = require('axios');
const ShortUrlService = require('../services/ShortUrlService');
jest.mock('axios');

describe('ShortUrlService', () => {
  let service;
  beforeEach(() => {
    service = new ShortUrlService();
  });

  it('mengembalikan short URL ketika API merespon dengan sukses', async () => {
    const fakeShortUrl = 'https://is.gd/abc123';
    axios.get.mockResolvedValue({ data: fakeShortUrl });
    const result = await service.shorten('https://contoh.com');
    expect(result).toBe(fakeShortUrl);
  });

  it('melempar error ketika API mengembalikan pesan error', async () => {
    axios.get.mockResolvedValue({ data: 'Error: Something went wrong' });
    await expect(service.shorten('https://contoh.com')).rejects.toThrow('API Error');
  });
});
