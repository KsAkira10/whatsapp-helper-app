import React from 'react';
import '../styles/components/header.css';

function Header() {
  return (
    <header className="header">
      <nav className="navbar">
        <a className="navbar-brand" href="https://whatsapp.com" target="_blank" rel="noopener noreferrer">
          <img src="https://www-cdn.whatsapp.net/img/v4/whatsapp-logo.svg" width="100%" height="35" className="d-inline-block align-top" alt="Whatsapp" />
        </a>
      </nav>
    </header>
  );
}
    
export default Header;