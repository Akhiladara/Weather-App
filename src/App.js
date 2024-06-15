import React, { useState } from 'react';
import './App.css';
import Weather from './components/Weather';
import ToggleSwitch from './components/ToggleSwitch';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(prevMode => !prevMode);
  };

  return (
    <div className='app'>
      <ToggleSwitch toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
      <Weather darkMode={darkMode} />
    </div>
  );
}

export default App;
