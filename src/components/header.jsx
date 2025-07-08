
import logo from '../assets/logo_ecole.png';
import facebookIcon from '../assets/facebook.svg';
import instagramIcon from '../assets/instagram.svg';
import youtubeIcon from '../assets/youtube.svg';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        {/* Logo et nom de l'école comme lien vers la page d'accueil */}
        <a href="/" className="logo-section">
          <div className="school-logo">
            <img 
              src={logo} 
              alt="Logo École" 
              className="logo-img"
            />
          </div>
          <div className="logo">
            <span className="logo-a">P</span>
            <span className="logo-m">S</span>
          </div>
          <div className="school-info">
            <div className="school-subtitle">Groupe scolaire</div>
            <div className="school-name">la Perle des sciences</div>
          </div>
        </a>

        {/* Boutons réseaux sociaux (liens externes) */}
        <div className="social-buttons">
          <a
            href="https://www.facebook.com/profile.php?id=100063268628098"
            target="_blank"
            rel="noopener noreferrer"
            className="social-btn facebook"
            title="Facebook"
          >
             <img src={facebookIcon} alt="Facebook" className="social-icon" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social-btn instagram"
            title="Instagram"
          >
            <img src={instagramIcon} alt="Instagram" className="social-icon" />
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social-btn youtube"
            title="YouTube"
          >
            <img src={youtubeIcon} alt="YouTube" className="social-icon" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social-btn linkedin"
            title="LinkedIn"
          >
            in
          </a>
        </div>
      </div>

      <style jsx>{`
        .header {
        background:rgb(255, 255, 255);
          padding: 20px 0;
          box-shadow: 0 2px 4px rgba(240, 60, 60, 0.1);
        }

        .container {
          max-width: 1500px;
          margin: 0 auto;
          padding: 0 20px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .logo-section {
          display: flex;
          align-items: center;
          gap: 20px;
          text-decoration: none;
        }

        .logo {
          display: flex;
          align-items: center;
        }

        .logo-a {
          font-size: 60px;
          font-weight: 300;
          color: rgb(5, 57, 199);
        }

        .logo-m {
          font-size: 60px;
          font-weight: 300;
          color: rgb(130, 28, 226);
        }

        .school-logo img.logo-img {
          height: 80px;
          width: auto;
          object-fit: contain;
        }

        .school-info {
          display: flex;
          flex-direction: column;
        }

        .school-subtitle {
          font-size: 18px;
          font-weight: bold;
          margin-bottom: 5px;
        }

        .school-name {
          font-size: 24px;
          color: #333;
          font-weight: 300;
        }

        .social-buttons {
          display: flex;
          gap: 20px;
          align-items: center;
        margin-left: auto;
        }

        .social-btn {
          width: 24px;
          height: 24px;
          border: none;
          border-radius: 50%;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
          color: white;
          font-size: 16px;
          text-decoration: none;
          transition: transform 0.2s;
        }

        .social-btn:hover {
          transform: scale(1.1);
        }

        .facebook {
          background:rgb(255, 255, 255);
        }

        .instagram {
          background:rgb(255, 255, 255);
        }

        .youtube {
          background:rgb(248, 248, 248);
        }

        .linkedin {
          background: #0077b5;
        }

        @media (max-width: 768px) {
          .container {
            flex-direction: column;
            gap: 20px;
            text-align: center;
          }

          .logo-section {
            flex-direction: column;
            gap: 10px;
          }

          .logo-a, .logo-m {
            font-size: 40px;
          }

          .school-name {
            font-size: 20px;
          }
        }
      `}</style>
    </header>
  );
};

export default Header;
