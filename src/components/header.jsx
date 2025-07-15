import { useState } from "react";
import logo from "../assets/logo_ecole.png";
import facebookIcon from "../assets/facebook.svg";
import instagramIcon from "../assets/instagram.svg";
import youtubeIcon from "../assets/youtube.svg";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [showAdminModal, setShowAdminModal] = useState(false);
  const [adminCredentials, setAdminCredentials] = useState({
    username: "",
    password: "",
  });
  const navigate = useNavigate();

  const [loginError, setLoginError] = useState("");
  const [showDashboardChoice, setShowDashboardChoice] = useState(false);

  const handleAdminClick = () => {
    setShowAdminModal(true);
    setLoginError("");
    setShowDashboardChoice(false);
  };

  const handleAdminLogin = async (e) => {
    e.preventDefault();
    console.log(
      "URL utilisée pour la requête :",
      `${process.env.REACT_APP_API_URL}/login-admin`
    );

    try {
      const res = await fetch(`${process.env.REACT_APP_API_URL}/login-admin`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(adminCredentials),
      });

      const data = await res.json();

      if (data.success) {
        sessionStorage.setItem("isAdmin", "true");
        setShowDashboardChoice(true);
        setLoginError("");
      } else {
        setLoginError("Nom d'utilisateur ou mot de passe incorrect");
      }
    } catch (error) {
      setLoginError("Erreur lors de la connexion au serveur");
    }
  };

  const handleModalClose = () => {
    setShowAdminModal(false);
    setAdminCredentials({ username: "", password: "" });
    setLoginError("");
    setShowDashboardChoice(false);
  };

  return (
    <>
      <header className="header">
        <div className="container">
          <a href="/" className="logo-section">
            <div className="school-logo">
              <img src={logo} alt="Logo École" className="logo-img" />
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

          <div className="social-buttons">
            <a
              href="https://www.facebook.com/profile.php?id=100063268628098"
              target="_blank"
              rel="noopener noreferrer"
              className="social-btn facebook"
            >
              <img src={facebookIcon} alt="Facebook" className="social-icon" />
            </a>
            <a
              href="https://www.instagram.com/g.s.la.perle.des.sciences/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-btn instagram"
            >
              <img
                src={instagramIcon}
                alt="Instagram"
                className="social-icon"
              />
            </a>
            <a
              href="https://www.youtube.com/@groupescolairelaperledessc1959"
              target="_blank"
              rel="noopener noreferrer"
              className="social-btn youtube"
            >
              <img src={youtubeIcon} alt="YouTube" className="social-icon" />
            </a>
            <button
              onClick={handleAdminClick}
              className="social-btn admin"
              title="Administration"
            >
              👤
            </button>
          </div>
        </div>
      </header>

      {showAdminModal && (
        <div className="modal-overlay" onClick={handleModalClose}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>Connexion Administrateur</h2>
              <button className="close-btn" onClick={handleModalClose}>
                ×
              </button>
            </div>

            {!showDashboardChoice ? (
              <form onSubmit={handleAdminLogin} className="admin-form">
                <div className="form-group">
                  <label htmlFor="username">Nom d'utilisateur:</label>
                  <input
                    type="text"
                    id="username"
                    value={adminCredentials.username}
                    onChange={(e) =>
                      setAdminCredentials({
                        ...adminCredentials,
                        username: e.target.value,
                      })
                    }
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Mot de passe:</label>
                  <input
                    type="password"
                    id="password"
                    value={adminCredentials.password}
                    onChange={(e) =>
                      setAdminCredentials({
                        ...adminCredentials,
                        password: e.target.value,
                      })
                    }
                    required
                  />
                </div>
                {loginError && (
                  <div className="error-message">{loginError}</div>
                )}
                <div className="form-actions">
                  <button
                    type="button"
                    onClick={handleModalClose}
                    className="cancel-btn"
                  >
                    Annuler
                  </button>
                  <button type="submit" className="login-btn">
                    Se connecter
                  </button>
                </div>
              </form>
            ) : (
              <div className="admin-form">
                <p style={{ marginBottom: "15px", fontWeight: "bold" }}>
                  Choisissez le tableau de bord :
                </p>
                <div
                  className="form-actions"
                  style={{ justifyContent: "center" }}
                >
                  <button
                    onClick={() => navigate("/admin")}
                    className="login-btn"
                  >
                    Inscription
                  </button>
                  <button
                    onClick={() => navigate("/admin/jobs")}
                    className="login-btn"
                  >
                    Recrutement
                  </button>
                </div>
                <div style={{ marginTop: "10px", textAlign: "center" }}>
                  <button className="cancel-btn" onClick={handleModalClose}>
                    Retour
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
      <style jsx>{`
        .header {
          background: rgb(255, 255, 255);
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
          background: rgb(255, 255, 255);
        }

        .instagram {
          background: rgb(255, 255, 255);
        }

        .youtube {
          background: #ffffffff;
        }

        .admin {
          background: #dc3545;
          color: white;
          font-size: 14px;
        }

        .admin:hover {
          background: #c82333;
        }

        /* Styles pour le modal */
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.5);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1000;
        }

        .modal-content {
          background: white;
          padding: 0;
          border-radius: 8px;
          width: 90%;
          max-width: 400px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }

        .modal-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 20px;
          border-bottom: 1px solid #eee;
        }

        .modal-header h2 {
          margin: 0;
          color: #333;
          font-size: 20px;
        }

        .close-btn {
          background: none;
          border: none;
          font-size: 24px;
          cursor: pointer;
          color: #666;
          padding: 0;
          width: 30px;
          height: 30px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .close-btn:hover {
          color: #333;
        }

        .admin-form {
          padding: 20px;
        }

        .form-group {
          margin-bottom: 15px;
        }

        .form-group label {
          display: block;
          margin-bottom: 5px;
          font-weight: bold;
          color: #333;
        }

        .form-group input {
          width: 100%;
          padding: 10px;
          border: 1px solid #ddd;
          border-radius: 4px;
          font-size: 14px;
          box-sizing: border-box;
        }

        .form-group input:focus {
          outline: none;
          border-color: #007bff;
        }

        .error-message {
          color: #dc3545;
          font-size: 14px;
          margin-bottom: 15px;
          padding: 10px;
          background: #f8d7da;
          border: 1px solid #f5c6cb;
          border-radius: 4px;
        }

        .form-actions {
          display: flex;
          gap: 10px;
          justify-content: flex-end;
        }

        .cancel-btn,
        .login-btn {
          padding: 10px 20px;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          font-size: 14px;
          transition: background-color 0.2s;
        }

        .cancel-btn {
          background: #6c757d;
          color: white;
        }

        .cancel-btn:hover {
          background: #5a6268;
        }

        .login-btn {
          background: #007bff;
          color: white;
        }

        .login-btn:hover {
          background: #0056b3;
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

          .logo-a,
          .logo-m {
            font-size: 40px;
          }

          .school-name {
            font-size: 20px;
          }

          .modal-content {
            width: 95%;
            margin: 20px;
          }
        }
      `}</style>
    </>
  );
};

export default Header;
