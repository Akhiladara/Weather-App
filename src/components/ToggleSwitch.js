import React from 'react';
import './ToggleSwitch.css';

const ToggleSwitch = ({ toggleDarkMode, darkMode }) => {
  return (
    <label className="switch">
      <input type="checkbox" checked={darkMode} onChange={toggleDarkMode} />
      <span className="slider round"></span>
    </label>
  );
};

export default ToggleSwitch;
