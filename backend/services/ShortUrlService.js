const axios = require('axios');

class ShortUrlService {
  constructor() {
    this.apiEndpoint = 'https://is.gd/create.php';
  }

  async shorten(originalUrl) {
    try {
      const response = await axios.get(this.apiEndpoint, {
        params: {
          format: 'simple',
          url: originalUrl
        },
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36',
          'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8'
        }
      });
      if (typeof response.data !== 'string' || response.data.includes('Error')) {
        throw new Error(`API Error: ${response.data}`);
      }
      return response.data;
    } catch (error) {
      throw new Error(`Error shortening URL: ${error.message}`);
    }
  }
}

module.exports = ShortUrlService;
