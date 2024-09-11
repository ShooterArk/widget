import React, { useState } from 'react';
import './App.css';
import ReactDOM from 'react-dom';

function App() {
  const [isWidgetOpen, setIsWidgetOpen] = useState(false);

  const handleButtonClick = () => {
    setIsWidgetOpen(!isWidgetOpen);
  };

  return (
    <div>
      <button onClick={handleButtonClick} className="buttonStyle">
        Open Widget
      </button>
      {isWidgetOpen && ReactDOM.createPortal(<MiniApp closeWidget={handleButtonClick} />, document.body)}
    </div>
  );
}

interface IMiniApp {
  closeWidget: () => void
}

const MiniApp: React.FC<IMiniApp> = ({ closeWidget }) => {
  return (
    <div className='overlayStyle'>
    <div className='modalStyle'>
      <button onClick={closeWidget} style={{ float: 'right', marginBottom: '10px' }}>
        Close
      </button>
      <h2>Welcome to the Mini App 2!</h2>
      <p>This is the content of your app, directly embedded!</p>
    </div>
  </div>
  );
};

export default App;
