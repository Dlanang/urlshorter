const TinyURL = require('tinyurl');

class ShortUrlService {
  async shorten(originalUrl) {
    return new Promise((resolve, reject) => {
      if (!originalUrl) {
        return reject(new Error('Original URL harus disediakan.'));
      }
      TinyURL.shorten(originalUrl, (err, shortUrl) => {
        console.log('tinyurl callback:', { err, shortUrl });
        if (err) {
          return reject(new Error(`Error shortening URL: ${err.message || err}`));
        }
        if (!shortUrl || shortUrl.startsWith('Error:')) {
          return reject(new Error(`API Error: ${shortUrl}`));
        }
        resolve(shortUrl);
      });
    });
  }
}

module.exports = ShortUrlService;
