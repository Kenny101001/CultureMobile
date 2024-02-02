import React from 'react';
import '../../public/FooterComponent.css';

function Footer() {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="footer-item">
          <button>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-house-door-fill" viewBox="0 0 16 16">
              <path d="M8 1.5a.5.5 0 0 0-.446.276l-6 11a.5.5 0 0 0 .446.724h11a.5.5 0 0 0 .446-.724l-6-11A.5.5 0 0 0 8 1.5z"/>
              <path fill-rule="evenodd" d="M3.207 14.5H2a.5.5 0 0 1-.417-.777L7.446 2H8v12h-.893l-.4-.74a.5.5 0 0 1-.417-.777l.893-1.648a.5.5 0 0 1 .834 0l.893 1.648a.5.5 0 0 1-.417.777H8v-2h1.893l5.054 9.723a.5.5 0 0 1-.417.777H12v-2h-.893l-.4-.74a.5.5 0 0 1-.417-.777l.893-1.648a.5.5 0 0 1 .834 0l.893 1.648a.5.5 0 0 1-.417.777H12v-4.184l-6-1.154-6 1.154V14.5z"/>
            </svg>
            <span>Accueil</span>
          </button>
        </div>
        <div className="footer-item">
          <button>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-envelope-fill" viewBox="0 0 16 16">
              <path d="M8 1a7 7 0 0 1 7 7v6a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V8a7 7 0 0 1 7-7z"/>
              <path fill-rule="evenodd" d="M0 3.5A1.5 1.5 0 0 1 1.5 2h13A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5H1.5A1.5 1.5 0 0 1 0 12.5v-9z"/>
            </svg>
            <span>Contact</span>
          </button>
        </div> 
        <div className="footer-item">
          <button onClick={() => handleRemoveCategory(2)}>
          <i class="fi fi-brands-android"></i>
            <span>Paramètres</span>
          </button>
        </div>                 
      </div>
    </div>
  );
}

export default Footer;
