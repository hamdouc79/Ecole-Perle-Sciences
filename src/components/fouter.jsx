import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        {/* Section Gauche - Description */}
        <div className="footer-left">
          <h3 className="footer-title">
            Le Lycée Français International André-Malraux est un établissement du réseau international OSUI.
          </h3>
          
          {/* Réseaux sociaux */}
          <div className="social-links">
            <a href="#" className="social-link facebook">
              <span>f</span>
            </a>
            <a href="#" className="social-link twitter">
              <span>t</span>
            </a>
            <a href="#" className="social-link instagram">
              <span>📷</span>
            </a>
            <a href="#" className="social-link youtube">
              <span>▶</span>
            </a>
            <a href="#" className="social-link linkedin">
              <span>in</span>
            </a>
          </div>
        </div>

        {/* Section Centre - Contact */}
        <div className="footer-center">
          <div className="contact-info">
            <p className="address">
              Rue K'tama – 10170<br />
              Rabat, Maroc
            </p>
            
            <div className="email-links">
              <a href="mailto:lycee.osuirabat@mlfmonde.org" className="email-link">
                lycee.osuirabat@mlfmonde.org
              </a>
              <a href="mailto:primaire.osuirabat@mlfmonde.org" className="email-link">
                primaire.osuirabat@mlfmonde.org
              </a>
            </div>

            <div className="phone-info">
              <p>
                <strong>Accueil du secondaire :</strong><br />
                (+212) 5 37 54 60 00
              </p>
              
              <p>
                <strong>Accueil du primaire :</strong><br />
                (+212) 5 37 54 61 00
              </p>
            </div>
          </div>
        </div>

        {/* Section Droite - Logos et liens */}
        <div className="footer-right">
          <div className="logo-section">
            <div className="logo-osui">
              <span className="logo-text">OSUI</span>
            </div>
            <div className="logo-cdp">
              <span className="logo-text">CDP</span>
            </div>
          </div>
          
          <div className="footer-links">
            <a href="#" className="footer-link">Formulaire de contact</a>
            <a href="#" className="footer-link">Offres d'emploi</a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer-bottom">
        <p className="copyright">© 2025 PixelCats Design</p>
      </div>
    </footer>
  );
};

export default Footer;