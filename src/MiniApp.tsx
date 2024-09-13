import React, { useState } from 'react';
// import MainContent from './MainContent';
import data from './data.json';

interface MiniAppProps {
  closeWidget: () => void;
}

const MiniApp: React.FC<MiniAppProps> = ({ closeWidget }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResult, setSearchResult] = useState<string | null>(null);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // For now, we'll just use the static data from data.json
    const result = data.metadata.answer;
    setSearchResult(result);
  };

  return (
    <div style={overlayStyle}>
      <button onClick={closeWidget} style={closeButton}>
        <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor">
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </button>
      <div style={modalStyle}>
        <h2>Welcome to the Mini App!</h2>
        <form onSubmit={handleSearch} style={searchFormStyle}>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Ask a question..."
            style={inputStyle}
          />
          <button type="submit" style={searchButtonStyle}>Search</button>
        </form>
        {searchResult && (
          <div style={resultStyle}>
            <h3>Answer:</h3>
            <p>{searchResult}</p>
          </div>
        )}
        {/* <MainContent /> */}
      </div>
    </div>
  );
};

// Modal overlay style
const overlayStyle: React.CSSProperties = {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  zIndex: 999,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

// Modal box style
const modalStyle: React.CSSProperties = {
  backgroundColor: '#fff',
  width: '80%',
  maxWidth: '800px',
  height: '80%',
  padding: '20px',
  boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
  borderRadius: '10px',
  position: 'relative',
};

// close button style
const closeButton: React.CSSProperties = {
  float: 'right',
  marginBottom: '10px',
  position: 'absolute',
  top: 10,
  right: 10,
  backgroundColor: 'transparent',
  color: 'white',
  border: 'none',
  cursor: 'pointer',
};

// Search form style
const searchFormStyle: React.CSSProperties = {
  display: 'flex',
  marginBottom: '20px',
};

// Input style
const inputStyle: React.CSSProperties = {
  flex: 1,
  padding: '10px',
  fontSize: '16px',
  border: '1px solid #ddd',
  borderRadius: '4px 0 0 4px',
};

// Search button style
const searchButtonStyle: React.CSSProperties = {
  padding: '10px 20px',
  fontSize: '16px',
  backgroundColor: '#007bff',
  color: 'white',
  border: 'none',
  borderRadius: '0 4px 4px 0',
  cursor: 'pointer',
};

// Result style
const resultStyle: React.CSSProperties = {
  marginTop: '20px',
  padding: '15px',
  backgroundColor: '#f0f0f0',
  borderRadius: '4px',
};

export default MiniApp;