import React from "react";
import {
  Users,
  Calendar,
  FileText,
  Phone,
  Mail,
  Clock,
  MapPin,
} from "lucide-react";

const EspaceParents = () => {
  return (
    <div className="page-container">
      {/* En-tête de la page */}
      <div className="page-header">
        <div className="header-content">
          <h1 className="page-title">Espace Parent</h1>
          <p className="page-subtitle">Votre lien privilégié avec l'école</p>
        </div>
      </div>

      {/* Section Association des Parents */}
      <div className="main-section">
        <div className="section-header">
          <Users className="section-icon" />
          <h2 className="section-title">Association des Parents d'Élèves</h2>
        </div>

        <div className="info-grid">
          <div className="info-card">
            <div className="card-header">
              <Users className="card-icon" />
              <h3>Notre Mission</h3>
            </div>
            <p>
              L'Association des Parents d'Élèves facilite le dialogue entre les
              familles et l'équipe éducative, organise des événements et
              soutient les projets pédagogiques de l'école.
            </p>
          </div>

          <div className="info-card">
            <div className="card-header">
              <FileText className="card-icon" />
              <h3>Nos Actions</h3>
            </div>
            <ul className="actions-list">
              <li>Organisation d'événements festifs et culturels</li>
              <li>Soutien aux sorties scolaires</li>
              <li>Participation aux conseils d'école</li>
              <li>Aide aux projets pédagogiques</li>
            </ul>
          </div>

          <div className="info-card">
            <div className="card-header">
              <Phone className="card-icon" />
              <h3>Contact</h3>
            </div>
            <div className="contact-info">
              <p>
                <Mail className="contact-icon" /> association.parents@ecole.com
              </p>
              <p>
                <Phone className="contact-icon" /> 01 23 45 67 89
              </p>
            </div>
          </div>
        </div>

        <div className="bureau-section">
          <h3 className="subsection-title">Bureau de l'Association</h3>
          <div className="bureau-grid">
            <div className="membre-card">
              <div className="membre-photo"></div>
              <h4>Mme Martin</h4>
              <p>Présidente</p>
            </div>
            <div className="membre-card">
              <div className="membre-photo"></div>
              <h4>M. Dupont</h4>
              <p>Vice-Président</p>
            </div>
            <div className="membre-card">
              <div className="membre-photo"></div>
              <h4>Mme Dubois</h4>
              <p>Secrétaire</p>
            </div>
            <div className="membre-card">
              <div className="membre-photo"></div>
              <h4>M. Bernard</h4>
              <p>Trésorier</p>
            </div>
          </div>
        </div>
      </div>

      {/* Section Organisation d'Entrée */}
      <div className="main-section">
        <div className="section-header">
          <MapPin className="section-icon" />
          <h2 className="section-title">Organisation d'Entrée</h2>
        </div>

        <div className="organisation-grid">
          <div className="organisation-card">
            <div className="card-header">
              <Clock className="card-icon" />
              <h3>Horaires d'Accueil</h3>
            </div>
            <div className="horaires-content">
              <div className="horaire-item">
                <span className="horaire-label">Matin :</span>
                <span className="horaire-time">7h30 - 8h30</span>
              </div>
              <div className="horaire-item">
                <span className="horaire-label">Soir :</span>
                <span className="horaire-time">16h30 - 18h30</span>
              </div>
              <div className="horaire-item">
                <span className="horaire-label">Mercredi :</span>
                <span className="horaire-time">12h00 - 18h00</span>
              </div>
            </div>
          </div>

          <div className="organisation-card">
            <div className="card-header">
              <MapPin className="card-icon" />
              <h3>Points d'Accès</h3>
            </div>
            <div className="acces-content">
              <div className="acces-item">
                <h4>Entrée Principale</h4>
                <p>Maternelle et Primaire</p>
              </div>
              <div className="acces-item">
                <h4>Entrée Secondaire</h4>
                <p>Collège et Lycée</p>
              </div>
              <div className="acces-item">
                <h4>Parking</h4>
                <p>Côté avenue de la République</p>
              </div>
            </div>
          </div>

          <div className="organisation-card">
            <div className="card-header">
              <Users className="card-icon" />
              <h3>Personnel d'Accueil</h3>
            </div>
            <div className="personnel-content">
              <div className="personnel-item">
                <h4>Mme Rousseau</h4>
                <p>Responsable Accueil</p>
              </div>
              <div className="personnel-item">
                <h4>M. Moreau</h4>
                <p>Surveillant</p>
              </div>
              <div className="personnel-item">
                <h4>Mme Leroy</h4>
                <p>Assistante Vie Scolaire</p>
              </div>
            </div>
          </div>
        </div>

        <div className="procedures-section">
          <h3 className="subsection-title">Procédures d'Entrée</h3>
          <div className="procedures-grid">
            <div className="procedure-step">
              <div className="step-number">1</div>
              <div className="step-content">
                <h4>Présentation</h4>
                <p>Se présenter à l'accueil avec la carte d'identité</p>
              </div>
            </div>
            <div className="procedure-step">
              <div className="step-number">2</div>
              <div className="step-content">
                <h4>Enregistrement</h4>
                <p>Signature du registre des visiteurs</p>
              </div>
            </div>
            <div className="procedure-step">
              <div className="step-number">3</div>
              <div className="step-content">
                <h4>Badge</h4>
                <p>Port obligatoire du badge visiteur</p>
              </div>
            </div>
            <div className="procedure-step">
              <div className="step-number">4</div>
              <div className="step-content">
                <h4>Accompagnement</h4>
                <p>Accompagnement vers le lieu de rendez-vous</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section Emplois du Temps */}
      <div className="main-section">
        <div className="section-header">
          <Calendar className="section-icon" />
          <h2 className="section-title">Emplois du Temps</h2>
        </div>

        <div className="emplois-container">
          <div className="emploi-temps-grid">
            <div className="emploi-card">
              <div className="emploi-header">
                <h3>Emploi du Temps - Semaine</h3>
              </div>
              <div className="emploi-placeholder">
                <Calendar className="emploi-icon" />
                <p>Emploi du temps hebdomadaire</p>
                <button className="download-btn">Télécharger PDF</button>
              </div>
            </div>

            <div className="emploi-card">
              <div className="emploi-header">
                <h3>Activités Parascolaires</h3>
              </div>
              <div className="emploi-placeholder">
                <Users className="emploi-icon" />
                <p>Programme des activités</p>
                <button className="download-btn">Télécharger PDF</button>
              </div>
            </div>
          </div>

          <div className="infos-importantes">
            <h3 className="subsection-title">Informations Importantes</h3>
            <div className="infos-grid">
              <div className="info-item">
                <h4>Changements d'Emploi du Temps</h4>
                <p>
                  Les modifications sont communiquées via l'application mobile
                  et le carnet de liaison.
                </p>
              </div>
              <div className="info-item">
                <h4>Absence d'un Professeur</h4>
                <p>
                  Les parents sont informés par SMS en cas d'absence imprévue.
                </p>
              </div>
              <div className="info-item">
                <h4>Rattrapage de Cours</h4>
                <p>
                  Les cours de rattrapage sont organisés selon le planning
                  affiché.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>
        {`
        .page-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 30px;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          background: #f8fafc;
          min-height: 100vh;
        }

        .page-header {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          padding: 50px 40px;
          border-radius: 16px;
          margin-bottom: 50px;
          text-align: center;
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
        }

        .page-title {
          font-size: 3rem;
          margin: 0 0 15px 0;
          font-weight: 700;
        }

        .page-subtitle {
          font-size: 1.3rem;
          margin: 0;
          opacity: 0.9;
        }

        .main-section {
          background: white;
          padding: 40px;
          border-radius: 16px;
          margin-bottom: 40px;
          box-shadow: 0 4px 20px rgba(0,0,0,0.08);
          border: 1px solid #e2e8f0;
        }

        .section-header {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 40px;
          padding-bottom: 20px;
          border-bottom: 2px solid #e2e8f0;
        }

        .section-icon {
          width: 32px;
          height: 32px;
          color: #667eea;
        }

        .section-title {
          font-size: 2.2rem;
          margin: 0;
          color: #1e293b;
          font-weight: 600;
        }

        .subsection-title {
          font-size: 1.6rem;
          margin: 40px 0 25px 0;
          color: #334155;
          font-weight: 600;
          padding-bottom: 10px;
          border-bottom: 1px solid #e2e8f0;
        }

        .info-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 30px;
          margin-bottom: 40px;
        }

        .info-card {
          background: #f8fafc;
          padding: 30px;
          border-radius: 12px;
          border: 1px solid #e2e8f0;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .info-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(0,0,0,0.1);
        }

        .card-header {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 20px;
        }

        .card-icon {
          width: 26px;
          height: 26px;
          color: #667eea;
        }

        .card-header h3 {
          margin: 0;
          font-size: 1.3rem;
          color: #1e293b;
          font-weight: 600;
        }

        .actions-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .actions-list li {
          padding: 12px 0;
          border-bottom: 1px solid #e2e8f0;
          color: #475569;
          line-height: 1.5;
        }

        .actions-list li:last-child {
          border-bottom: none;
        }

        .contact-info {
          display: flex;
          flex-direction: column;
          gap: 15px;
        }

        .contact-info p {
          display: flex;
          align-items: center;
          gap: 10px;
          margin: 0;
          color: #475569;
          font-size: 1.05rem;
        }

        .contact-icon {
          width: 18px;
          height: 18px;
          color: #667eea;
        }

        .bureau-section {
          margin-top: 40px;
        }

        .bureau-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 25px;
        }

        .membre-card {
          background: white;
          padding: 25px;
          border-radius: 12px;
          border: 1px solid #e2e8f0;
          text-align: center;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .membre-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(0,0,0,0.1);
        }

        .membre-photo {
          width: 90px;
          height: 90px;
          border-radius: 50%;
          background: linear-gradient(135deg, #e2e8f0 0%, #cbd5e1 100%);
          margin: 0 auto 20px;
        }

        .membre-card h4 {
          margin: 0 0 8px 0;
          color: #1e293b;
          font-size: 1.1rem;
        }

        .membre-card p {
          margin: 0;
          color: #667eea;
          font-weight: 500;
        }

        .organisation-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 30px;
          margin-bottom: 40px;
        }

        .organisation-card {
          background: #f8fafc;
          padding: 30px;
          border-radius: 12px;
          border: 1px solid #e2e8f0;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .organisation-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(0,0,0,0.1);
        }

        .horaires-content, .acces-content, .personnel-content {
          display: flex;
          flex-direction: column;
          gap: 18px;
        }

        .horaire-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 15px 0;
          border-bottom: 1px solid #e2e8f0;
        }

        .horaire-item:last-child {
          border-bottom: none;
        }

        .horaire-label {
          font-weight: 500;
          color: #1e293b;
          font-size: 1.05rem;
        }

        .horaire-time {
          color: #667eea;
          font-weight: 600;
          font-size: 1.05rem;
        }

        .acces-item, .personnel-item {
          padding: 15px 0;
          border-bottom: 1px solid #e2e8f0;
        }

        .acces-item:last-child, .personnel-item:last-child {
          border-bottom: none;
        }

        .acces-item h4, .personnel-item h4 {
          margin: 0 0 8px 0;
          color: #1e293b;
          font-size: 1.1rem;
        }

        .acces-item p, .personnel-item p {
          margin: 0;
          color: #64748b;
          font-size: 1rem;
        }

        .procedures-section {
          margin-top: 40px;
        }

        .procedures-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 25px;
        }

        .procedure-step {
          display: flex;
          gap: 20px;
          padding: 25px;
          background: white;
          border-radius: 12px;
          border: 1px solid #e2e8f0;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .procedure-step:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(0,0,0,0.1);
        }

        .step-number {
          width: 45px;
          height: 45px;
          border-radius: 50%;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 600;
          font-size: 1.1rem;
          flex-shrink: 0;
        }

        .step-content h4 {
          margin: 0 0 10px 0;
          color: #1e293b;
          font-size: 1.1rem;
        }

        .step-content p {
          margin: 0;
          color: #64748b;
          line-height: 1.5;
        }

        .emplois-container {
          display: flex;
          flex-direction: column;
          gap: 40px;
        }

        .niveau-selector {
          display: flex;
          justify-content: center;
        }

        .niveau-select {
          padding: 15px 25px;
          border: 2px solid #e2e8f0;
          border-radius: 10px;
          font-size: 1.1rem;
          background: white;
          cursor: pointer;
          transition: border-color 0.2s ease;
        }

        .niveau-select:focus {
          outline: none;
          border-color: #667eea;
        }

        .emploi-temps-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 30px;
        }

        .emploi-card {
          background: #f8fafc;
          border-radius: 12px;
          border: 1px solid #e2e8f0;
          overflow: hidden;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .emploi-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(0,0,0,0.1);
        }

        .emploi-header {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          padding: 25px;
          text-align: center;
        }

        .emploi-header h3 {
          margin: 0;
          font-size: 1.2rem;
          font-weight: 600;
        }

        .emploi-placeholder {
          padding: 50px 25px;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 20px;
        }

        .emploi-icon {
          width: 52px;
          height: 52px;
          color: #94a3b8;
        }

        .emploi-placeholder p {
          margin: 0;
          color: #64748b;
          font-size: 1.1rem;
        }

        .download-btn {
          padding: 12px 25px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          font-weight: 500;
          font-size: 1rem;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .download-btn:hover {
          transform: translateY(-1px);
          box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);
        }

        .infos-importantes {
          margin-top: 40px;
        }

        .infos-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 25px;
        }

        .info-item {
          background: white;
          padding: 25px;
          border-radius: 12px;
          border: 1px solid #e2e8f0;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .info-item:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(0,0,0,0.1);
        }

        .info-item h4 {
          margin: 0 0 15px 0;
          color: #1e293b;
          font-size: 1.2rem;
          font-weight: 600;
        }

        .info-item p {
          margin: 0;
          color: #64748b;
          line-height: 1.6;
          font-size: 1rem;
        }

        @media (max-width: 768px) {
          .page-container {
            padding: 20px;
          }
          
          .page-title {
            font-size: 2.2rem;
          }
          
          .main-section {
            padding: 25px;
            margin-bottom: 30px;
          }
          
          .section-title {
            font-size: 1.8rem;
          }
          
          .info-grid, .organisation-grid, .procedures-grid, .emploi-temps-grid, .infos-grid {
            grid-template-columns: 1fr;
          }
          
          .bureau-grid {
            grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
          }

          .section-header {
            flex-direction: column;
            text-align: center;
            gap: 10px;
          }
        }
        `}
      </style>
    </div>
  );
};

export default EspaceParents;
