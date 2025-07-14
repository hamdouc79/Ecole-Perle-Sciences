import React from "react";
import {
  GraduationCap,
  Users,
  Award,
  Globe,
  BookOpen,
  Star,
} from "lucide-react";

const Ecole = () => {
  return (
    <main className="ecole-page">
      {/* Section Présentation Moderne */}
      <section className="presentation-hero">
        <div className="hero-background">
          <div className="floating-shapes">
            <div className="shape shape-1"></div>
            <div className="shape shape-2"></div>
            <div className="shape shape-3"></div>
            <div className="shape shape-4"></div>
          </div>
        </div>

        <div className="hero-content">
          <div className="hero-text">
            <div className="hero-badge">
              <GraduationCap className="badge-icon" />
              <span>Excellence Éducative</span>
            </div>

            <h1 className="hero-title">
              Groupe scolaire
              <span className="title-highlight"> Perle-des-Sciences</span>
            </h1>

            <p className="hero-description">
              Un établissement d'excellence qui façonne les leaders de demain
              dans un environnement multiculturel et bienveillant. De la
              maternelle au lycée, nous offrons une éducation française de
              qualité au cœur du Maroc.
            </p>

            <div className="hero-stats">
              <div className="stat-item">
                <div className="stat-number">9+</div>
                <div className="stat-label">Années d'expérience</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">700+</div>
                <div className="stat-label">Élèves formés</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">97%</div>
                <div className="stat-label">Taux de réussite</div>
              </div>
            </div>

            <div className="hero-features">
              <div className="feature-item">
                <Users className="feature-icon" />
                <span>Environnement multiculturel</span>
              </div>
              <div className="feature-item"></div>
              <div className="feature-item">
                <Globe className="feature-icon" />
                <span>Ouverture internationale</span>
              </div>
            </div>
          </div>

          <div className="hero-image">
            <div className="image-container">
              <img
                src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="École moderne"
                className="hero-img"
              />
              <div className="image-overlay">
                <div className="overlay-content">
                  <BookOpen className="overlay-icon" />
                  <span></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Historique */}
      <section className="historique-section">
        <div className="section-container">
          <div className="historique-content">
            <div className="historique-image">
              <div className="image-box">
                <img
                  src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                  alt="Histoire de l'école"
                  className="historique-img"
                />
              </div>
            </div>

            <div className="historique-text">
              <h2 className="section-title">Historique de l'École</h2>
              <div className="timeline">
                <div className="timeline-item">
                  <div className="timeline-year">2016</div>
                  <div className="timeline-content">
                    <h3 className="timeline-title">
                      Création de l'établissement
                    </h3>
                    <p className="timeline-text">
                      Ouverture du Groupe Scolaire la Perle des Sciences
                    </p>
                  </div>
                </div>

                <div className="timeline-item">
                  <div className="timeline-year">2016</div>
                  <div className="timeline-content">
                    <h3 className="timeline-title">Extension du primaire</h3>
                    <p className="timeline-text">
                      Agrandissement des locaux et développement des classes
                      primaires.
                    </p>
                  </div>
                </div>

                <div className="timeline-item">
                  <div className="timeline-year">2023</div>
                  <div className="timeline-content">
                    <h3 className="timeline-title">Modernisation numérique</h3>
                    <p className="timeline-text">
                      Mise en place des outils numériques et adaptation à
                      l'enseignement moderne.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Équipe Enseignante */}
      <section className="equipe-section">
        <div className="section-container">
          <h2 className="section-title center">Notre Équipe Enseignante</h2>
          <p className="section-description">
            Une équipe pédagogique qualifiée et expérimentée, dédiée à la
            réussite de chaque élève.
          </p>

          <div className="equipe-grid">
            {/* Enseignant 1 */}
            <div className="enseignant-card">
              <div className="enseignant-photo">
                <img
                  src="https://images.unsplash.com/photo-1494790108755-2616c5e739b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
                  alt="Mme. Martin"
                  className="enseignant-img"
                />
              </div>
              <div className="enseignant-info">
                <h3 className="enseignant-nom">Mme. Martin</h3>
                <p className="enseignant-poste">Directrice Pédagogique</p>
                <p className="enseignant-matiere">Français - Littérature</p>
              </div>
            </div>

            {/* Enseignant 2 */}
            <div className="enseignant-card">
              <div className="enseignant-photo">
                <img
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
                  alt="M. Dubois"
                  className="enseignant-img"
                />
              </div>
              <div className="enseignant-info">
                <h3 className="enseignant-nom">M. Dubois</h3>
                <p className="enseignant-poste">Professeur Senior</p>
                <p className="enseignant-matiere">Mathématiques - Sciences</p>
              </div>
            </div>

            {/* Enseignant 3 */}
            <div className="enseignant-card">
              <div className="enseignant-photo">
                <img
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
                  alt="Mme. Benali"
                  className="enseignant-img"
                />
              </div>
              <div className="enseignant-info">
                <h3 className="enseignant-nom">Mme. Benali</h3>
                <p className="enseignant-poste">Professeure</p>
                <p className="enseignant-matiere">Arabe - Histoire</p>
              </div>
            </div>

            {/* Enseignant 4 */}
            <div className="enseignant-card">
              <div className="enseignant-photo">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
                  alt="M. Johnson"
                  className="enseignant-img"
                />
              </div>
              <div className="enseignant-info">
                <h3 className="enseignant-nom">M. Johnson</h3>
                <p className="enseignant-poste">Professeur</p>
                <p className="enseignant-matiere">Anglais - Espagnol</p>
              </div>
            </div>

            {/* Enseignant 5 */}
            <div className="enseignant-card">
              <div className="enseignant-photo">
                <img
                  src="https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
                  alt="Mme. Rousseau"
                  className="enseignant-img"
                />
              </div>
              <div className="enseignant-info">
                <h3 className="enseignant-nom">Mme. Rousseau</h3>
                <p className="enseignant-poste">Professeure</p>
                <p className="enseignant-matiere">Arts - Musique</p>
              </div>
            </div>

            {/* Enseignant 6 */}
            <div className="enseignant-card">
              <div className="enseignant-photo">
                <img
                  src="https://images.unsplash.com/photo-1566492031773-4f4e44671d66?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
                  alt="M. El Fassi"
                  className="enseignant-img"
                />
              </div>
              <div className="enseignant-info">
                <h3 className="enseignant-nom">M. El Fassi</h3>
                <p className="enseignant-poste">Professeur</p>
                <p className="enseignant-matiere">Éducation Physique</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .ecole-page {
          background-color: #f8f9fa;
          min-height: 100vh;
        }

        /* Hero Section Moderne */
        .presentation-hero {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          min-height: 100vh;
          display: flex;
          align-items: center;
          position: relative;
          overflow: hidden;
          color: white;
        }

        .hero-background {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
        }

        .floating-shapes {
          position: absolute;
          width: 100%;
          height: 100%;
        }

        .shape {
          position: absolute;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 50%;
          animation: float 6s ease-in-out infinite;
        }

        .shape-1 {
          width: 80px;
          height: 80px;
          top: 20%;
          left: 10%;
          animation-delay: 0s;
        }

        .shape-2 {
          width: 60px;
          height: 60px;
          top: 60%;
          left: 85%;
          animation-delay: 2s;
        }

        .shape-3 {
          width: 100px;
          height: 100px;
          top: 80%;
          left: 20%;
          animation-delay: 4s;
        }

        .shape-4 {
          width: 40px;
          height: 40px;
          top: 30%;
          left: 70%;
          animation-delay: 1s;
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        .hero-content {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
          position: relative;
          z-index: 2;
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(255, 255, 255, 0.2);
          backdrop-filter: blur(10px);
          padding: 8px 16px;
          border-radius: 25px;
          font-size: 0.9rem;
          font-weight: 600;
          margin-bottom: 20px;
          border: 1px solid rgba(255, 255, 255, 0.3);
        }

        .badge-icon {
          width: 18px;
          height: 18px;
        }

        .hero-title {
          font-size: 3.5rem;
          font-weight: 800;
          line-height: 1.2;
          margin-bottom: 20px;
        }

        .title-highlight {
          background: linear-gradient(45deg, #ffd700, #ffa500);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .hero-description {
          font-size: 1.2rem;
          line-height: 1.6;
          opacity: 0.9;
          margin-bottom: 30px;
        }

        .hero-stats {
          display: flex;
          gap: 30px;
          margin-bottom: 40px;
        }

        .stat-item {
          text-align: center;
        }

        .stat-number {
          font-size: 2.5rem;
          font-weight: 800;
          color: #ffd700;
          margin-bottom: 5px;
        }

        .stat-label {
          font-size: 0.9rem;
          opacity: 0.8;
        }

        .hero-features {
          display: flex;
          flex-direction: column;
          gap: 15px;
        }

        .feature-item {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 1rem;
        }

        .feature-icon {
          width: 20px;
          height: 20px;
          color: #ffd700;
        }

        .hero-image {
          position: relative;
        }

        .image-container {
          position: relative;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
        }

        .hero-img {
          width: 100%;
          height: 400px;
          object-fit: cover;
        }

        .image-overlay {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          background: linear-gradient(transparent, rgba(0, 0, 0, 0.8));
          padding: 30px 20px 20px;
        }

        .overlay-content {
          display: flex;
          align-items: center;
          gap: 10px;
          color: white;
          font-weight: 600;
        }

        .overlay-icon {
          width: 24px;
          height: 24px;
        }

        /* Sections restantes */
        .section-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .section-title {
          font-size: 2rem;
          color: #0ea5e9;
          margin-bottom: 30px;
          font-weight: bold;
        }

        .section-title.center {
          text-align: center;
        }

        .section-description {
          text-align: center;
          font-size: 1.1rem;
          color: #6b7280;
          margin-bottom: 50px;
          max-width: 800px;
          margin-left: auto;
          margin-right: auto;
        }

        .historique-section {
          background-color: #f0f9ff;
          padding: 60px 0;
        }

        .historique-content {
          display: flex;
          flex-direction: column;
          gap: 40px;
          align-items: center;
        }

        .historique-image {
          flex: 1;
          max-width: 400px;
          width: 100%;
        }

        .image-box {
          border-radius: 10px;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        }

        .historique-img {
          width: 100%;
          height: 300px;
          object-fit: cover;
        }

        .historique-text {
          flex: 1;
          max-width: 700px;
        }

        .timeline {
          position: relative;
          padding-left: 30px;
        }

        .timeline::before {
          content: "";
          position: absolute;
          left: 15px;
          top: 0;
          bottom: 0;
          width: 3px;
          background-color: #0ea5e9;
        }

        .timeline-item {
          position: relative;
          margin-bottom: 30px;
          padding-left: 40px;
        }

        .timeline-item::before {
          content: "";
          position: absolute;
          left: -8px;
          top: 5px;
          width: 15px;
          height: 15px;
          background-color: #0ea5e9;
          border-radius: 50%;
        }

        .timeline-year {
          font-size: 1.2rem;
          font-weight: bold;
          color: #0ea5e9;
          margin-bottom: 10px;
        }

        .timeline-title {
          font-size: 1.1rem;
          font-weight: bold;
          color: #1f2937;
          margin-bottom: 8px;
        }

        .timeline-text {
          color: #6b7280;
          line-height: 1.6;
        }

        .equipe-section {
          background-color: white;
          padding: 60px 0;
        }

        .equipe-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 30px;
          margin-top: 40px;
        }

        .enseignant-card {
          background-color: #f8f9fa;
          border-radius: 12px;
          padding: 25px;
          text-align: center;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .enseignant-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);
        }

        .enseignant-photo {
          margin-bottom: 20px;
        }

        .enseignant-img {
          width: 120px;
          height: 120px;
          border-radius: 50%;
          object-fit: cover;
          border: 3px solid #0ea5e9;
        }

        .enseignant-info {
          text-align: center;
        }

        .enseignant-nom {
          font-size: 1.3rem;
          font-weight: bold;
          color: #1f2937;
          margin-bottom: 8px;
        }

        .enseignant-poste {
          font-size: 1rem;
          color: #0ea5e9;
          font-weight: 600;
          margin-bottom: 5px;
        }

        .enseignant-matiere {
          font-size: 0.95rem;
          color: #6b7280;
          font-style: italic;
        }

        /* Responsive Design */
        @media (max-width: 1024px) {
          .hero-content {
            grid-template-columns: 1fr;
            gap: 40px;
            text-align: center;
          }

          .hero-title {
            font-size: 2.5rem;
          }

          .hero-stats {
            justify-content: center;
          }
        }

        @media (min-width: 768px) {
          .historique-content {
            flex-direction: row;
          }

          .equipe-grid {
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          }
        }

        @media (min-width: 1024px) {
          .equipe-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        @media (max-width: 768px) {
          .hero-stats {
            flex-direction: column;
            gap: 20px;
          }

          .hero-features {
            align-items: center;
          }
        }
      `}</style>
    </main>
  );
};

export default Ecole;
