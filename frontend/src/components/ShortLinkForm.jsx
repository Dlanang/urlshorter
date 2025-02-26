import React, { useState } from 'react';

function ShortLinkForm({ onShorten }) {
  const [url, setUrl] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (url) {
      setLoading(true);
      await onShorten(url);
      setLoading(false);
      setUrl('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
      <input
        type="url"
        className="border border-gray-300 p-2 rounded"
        placeholder="https://contoh.com"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        required
      />
      <button
        type="submit"
        className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        disabled={loading}
      >
        {loading ? 'Processing...' : 'Generate'}
      </button>
    </form>
  );
}

export default ShortLinkForm;
