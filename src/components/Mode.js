import React, { useState } from 'react';
import './Mode.css'
const Mode = () => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.body.className = newTheme; 
  };

  return (
    <div>
      <button onClick={toggleTheme}>
         {theme === 'light' ? 'Dark' : 'Light'} 
      </button>
    </div>
  );
};

export default Mode;
