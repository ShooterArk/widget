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
    <div style={modalStyle}>
      <button onClick={closeWidget} style={{ float: 'right', marginBottom: '10px' }}>
        Close
      </button>
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

export default App;
