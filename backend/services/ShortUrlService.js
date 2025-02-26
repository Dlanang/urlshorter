const TinyURL = require('tinyurl');

class ShortUrlService {
  async shorten(originalUrl) {
    return new Promise((resolve, reject) => {
      if (!originalUrl) {
        return reject(new Error('Original URL harus disediakan.'));
      }
      TinyURL.shorten(originalUrl, (result) => {
        console.log('tinyurl callback:', result);
        if (!result) {
          return reject(new Error('Error: tidak ada respons dari TinyURL'));
        }
        if (result.startsWith('Error:')) {
          return reject(new Error(`API Error: ${result}`));
        }
        resolve(result);
      });
    });
  }
}

module.exports = ShortUrlService;
