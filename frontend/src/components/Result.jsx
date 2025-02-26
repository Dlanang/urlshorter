import React from 'react';

function Result({ data }) {
  const handleShare = async () => {
    const shareData = {
      title: 'Short URL',
      text: 'Cek short URL ini!',
      url: data.shortUrl
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (error) {
        console.error('Error sharing:', error);
      }
    } else {
      try {
        await navigator.clipboard.writeText(data.shortUrl);
        alert('Short URL disalin ke clipboard!');
      } catch (error) {
        console.error('Error copying:', error);
      }
    }
  };

  return (
    <div className="mt-4">
      <p>
        <strong>URL Asli:</strong>{' '}
        <a href={data.originalUrl} target="_blank" rel="noopener noreferrer" className="text-blue-500">
          {data.originalUrl}
        </a>
      </p>
      <p>
        <strong>Short URL:</strong>{' '}
        <a href={data.shortUrl} target="_blank" rel="noopener noreferrer" className="text-blue-500">
          {data.shortUrl}
        </a>
      </p>
      <div className="mt-4">
        <img src={data.qrDataUrl} alt="QR Code" className="mx-auto" />
        <div className="flex justify-center space-x-4 mt-2">
          <a href={data.qrDataUrl} download="qrcode.png" className="text-blue-500 hover:underline">
            Download QR Code
          </a>
          <button onClick={handleShare} className="text-blue-500 hover:underline">
            Share
          </button>
        </div>
      </div>
    </div>
  );
}

export default Result;
