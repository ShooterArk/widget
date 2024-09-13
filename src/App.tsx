import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import MiniApp from './MiniApp';

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

export default App;
