import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ShortLinkForm from './components/ShortLinkForm';
import Result from './components/Result';

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:4000';

function App() {
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const storedHistory = JSON.parse(localStorage.getItem('shortUrlHistory')) || [];
    setHistory(storedHistory);
  }, []);

  const updateHistory = (newRecord) => {
    const updatedHistory = [newRecord, ...history];
    setHistory(updatedHistory);
    localStorage.setItem('shortUrlHistory', JSON.stringify(updatedHistory));
  };

  const handleShorten = async (url) => {
    try {
      setError('');
      const response = await axios.post(`${API_BASE_URL}/api/shorten`, { url });
      setResult(response.data);
      updateHistory(response.data);
    } catch (err) {
      console.error(err);
      setError('Terjadi kesalahan saat membuat short URL.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-xl mx-auto bg-white p-6 rounded shadow">
        <h1 className="text-2xl font-bold mb-4">Short Link & QR Code Generator</h1>
        <ShortLinkForm onShorten={handleShorten} />
        {error && <p className="text-red-500 mt-2">{error}</p>}
        {result && <Result data={result} />}
        {history.length > 0 && (
          <div className="mt-6">
            <h2 className="text-xl font-semibold mb-2">Riwayat Short URL</h2>
            <ul className="list-disc pl-5">
              {history.map((item, index) => (
                <li key={index}>
                  <a href={item.shortUrl} target="_blank" rel="noopener noreferrer" className="text-blue-500">
                    {item.shortUrl}
                  </a> - {item.originalUrl}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
