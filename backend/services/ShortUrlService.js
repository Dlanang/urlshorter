const TinyURL = require('tinyurl');

class ShortUrlService {
  async shorten(originalUrl) {
    return new Promise((resolve, reject) => {
      if (!originalUrl) {
        return reject(new Error('Original URL harus disediakan.'));
      }
      TinyURL.shorten(originalUrl, function(res) {
        // Jika res berupa string yang berisi "Error", kita anggap ada error
        if (!res || (typeof res === 'string' && res.startsWith('Error'))) {
          return reject(new Error(`Error shortening URL: ${res}`));
        }
        resolve(res);
      });
    });
  }
}

module.exports = ShortUrlService;
