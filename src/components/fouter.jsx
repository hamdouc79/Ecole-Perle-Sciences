import React from "react";
import "./footer.css";
import instagramIcon from "../assets/instagram.svg";
import youtubeIcon from "../assets/youtube.svg";
import Recrutement from "../page/recrutement";
const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        {/* Section Gauche - Description */}
        <div className="footer-left">
          <h3 className="footer-title">
            Groupe Scolaire la Perle des Sciences
          </h3>

          {/* Réseaux sociaux */}
          <div className="social-links">
            <a
              href="https://www.facebook.com/profile.php?id=100063268628098"
              target="blank"
              title="facebook"
              className="social-link facebook"
            >
              <span>f</span>
            </a>

            <a
              href="https://www.instagram.com/g.s.la.perle.des.sciences/"
              target="blank"
              title="instagram"
              className="social-link instagram"
            >
              <img
                src={instagramIcon}
                alt="Instagram"
                className="social-icon"
              />
            </a>
            <a
              href="https://www.youtube.com/@groupescolairelaperledessc1959"
              target="blank"
              title="youtube"
              className="social-link youtube"
            >
              <img src={youtubeIcon} alt="Instagram" className="social-icon" />
            </a>
          </div>
        </div>

        {/* Section Centre - Contact */}
        <div className="footer-center">
          <div className="contact-info">
            <p className="address">
              تجزئة جوهرة,النرجس,حي الرياض- فاس
              <br />
              Fes, Maroc
            </p>

            <div className="email-links">
              <a href="La.perle.des.sciences@gmail.com" className="email-link">
                La.perle.des.sciences@gmail.com
              </a>
              <a href="La.perle.des.sciences@gmail.com" className="email-link">
                La.perle.des.sciences@gmail.com
              </a>
            </div>

            <div className="phone-info">
              <p>
                <strong>Accueil du secondaire :</strong>
                <br />
                (+212) 666204535
              </p>

              <p>
                <strong>Accueil du primaire :</strong>
                <br />
                (+212) 661603173
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
            <a href="#" className="footer-link">
              Formulaire de contact
            </a>
            <a href="./Recrutement" className="footer-link">
              Offres d'emploi
            </a>
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
