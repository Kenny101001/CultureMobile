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
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-gear-fill" viewBox="0 0 16 16">
              <path d="M9.375 1.726c-.265-.364-.665-.569-1.072-.569-.408 0-.807.205-1.072.569L6.35 3.01a5.516 5.516 0 0 1-1.324 1.324l-1.284-.665c-.364-.187-.77-.267-1.157-.206a4.338 4.338 0 0 0-2.245.99c-.373.287-.673.665-.88 1.09l.634 1.2c-.45.733-.749 1.543-.885 2.386l-1.2.635c-.424.227-.709.62-.79 1.083a5.476 5.476 0 0 0-.075 1.632c.018.458.165.911.437 1.312.242.364.569.665.957.873.364.188.77.268 1.158.207a4.375 4.375 0 0 0 1.09-.88l1.2.633c.733.45 1.543.748 2.386.885l.634 1.2c.226.424.62.71 1.083.79.456.08.91.032 1.333-.113.383-.13.73-.33 1.04-.593.343-.297.63-.682.828-1.125.242-.457.366-.956.346-1.456a5.515 5.515 0 0 0-.44-1.914c-.24-.363-.567-.664-.955-.872l-1.2-.633c" />
            </svg>
            <span>Paramètres</span>
          </button>
        </div>                 
      </div>
    </div>
  );
}

export default Footer;
