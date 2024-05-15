import React from 'react';
import '../styles.css';

const Header = ({ darkMode, toggleDarkMode }) => {
  return (
    <header>
     <h1>Nomo</h1>
      <nav>
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      <div className="toggle-container">
        <input
          type="checkbox"
          id="dark-mode-toggle"
          className="toggle-switch"
          checked={darkMode}
          onChange={toggleDarkMode}
        />
        <label htmlFor="dark-mode-toggle" className="toggle-label"></label>
      </div>
    </header>
  );
}

export default Header;
