import React, { useState } from 'react';
import ReactDOM from 'react-dom';

function App() {
  const [isWidgetOpen, setIsWidgetOpen] = useState(false);

  const handleButtonClick = () => {
    setIsWidgetOpen(!isWidgetOpen);
  };

  return (
    <div>
      <button onClick={handleButtonClick} style={buttonStyle}>
        Open Widget
      </button>
      {isWidgetOpen && ReactDOM.createPortal(<MiniApp closeWidget={handleButtonClick} />, document.body)}
    </div>
  );
}

const buttonStyle: React.CSSProperties = {
  position: 'fixed',
  bottom: '20px',
  right: '20px',
  padding: '10px 20px',
  backgroundColor: '#007bff',
  color: '#fff',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
};

interface IMiniApp {
  closeWidget: () => void
}

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
        <h2>Welcome to the Mini App 2!</h2>
        <p>This is the content of your app, directly embedded!</p>
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
};

export default App;
