import React from 'react';

const MiniApp: React.FC<IMiniApp> = ({ closeWidget }) => {
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
        <p>This is the content of your app!</p>
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

export default MiniApp;