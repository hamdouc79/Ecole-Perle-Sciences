import React, { useState } from 'react';
import { Users, Calendar, FileText, Phone, Mail, Clock, MapPin } from 'lucide-react';

const EspaceParents = () => {
  const [activeTab, setActiveTab] = useState('association');

  return (
    <div className="page-container">
      {/* En-tête de la page */}
      <div className="page-header">
        <div className="header-content">
          <h1 className="page-title">Espace Parent</h1>
          <p className="page-subtitle">Votre lien privilégié avec l'école</p>
        </div>
      </div>

      {/* Navigation des onglets */}
      <div className="tabs-container">
        <div className="tabs-nav">
          <button 
            className={`tab-button ${activeTab === 'association' ? 'active' : ''}`}
            onClick={() => setActiveTab('association')}
          >
            <Users className="tab-icon" />
            Association des Parents
          </button>
          <button 
            className={`tab-button ${activeTab === 'organisation' ? 'active' : ''}`}
            onClick={() => setActiveTab('organisation')}
          >
            <MapPin className="tab-icon" />
            Organisation d'Entrée
          </button>
          <button 
            className={`tab-button ${activeTab === 'emplois' ? 'active' : ''}`}
            onClick={() => setActiveTab('emplois')}
          >
            <Calendar className="tab-icon" />
            Emplois du Temps
          </button>
        </div>
      </div>

      {/* Contenu des onglets */}
      <div className="tab-content">
        {activeTab === 'association' && (
          <div className="content-section">
            <h2 className="section-title">Association des Parents d'Élèves</h2>
            
            <div className="info-grid">
              <div className="info-card">
                <div className="card-header">
                  <Users className="card-icon" />
                  <h3>Notre Mission</h3>
                </div>
                <p>L'Association des Parents d'Élèves facilite le dialogue entre les familles et l'équipe éducative, organise des événements et soutient les projets pédagogiques de l'école.</p>
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
                  <p><Mail className="contact-icon" /> association.parents@ecole.com</p>
                  <p><Phone className="contact-icon" /> 01 23 45 67 89</p>
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
        )}

        {activeTab === 'organisation' && (
          <div className="content-section">
            <h2 className="section-title">Organisation d'Entrée</h2>
            
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
        )}

        {activeTab === 'emplois' && (
          <div className="content-section">
            <h2 className="section-title">Emplois du Temps</h2>
            
            <div className="emplois-container">
              <div className="niveau-selector">
                <select className="niveau-select">
                  <option>Sélectionner un niveau</option>
                  <option>Maternelle</option>
                  <option>CP</option>
                  <option>CE1</option>
                  <option>CE2</option>
                  <option>CM1</option>
                  <option>CM2</option>
                  <option>6ème</option>
                  <option>5ème</option>
                  <option>4ème</option>
                  <option>3ème</option>
                </select>
              </div>

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

                <div className="emploi-card">
                  <div className="emploi-header">
                    <h3>Calendrier Scolaire</h3>
                  </div>
                  <div className="emploi-placeholder">
                    <FileText className="emploi-icon" />
                    <p>Calendrier de l'année</p>
                    <button className="download-btn">Télécharger PDF</button>
                  </div>
                </div>
              </div>

              <div className="infos-importantes">
                <h3 className="subsection-title">Informations Importantes</h3>
                <div className="infos-grid">
                  <div className="info-item">
                    <h4>Changements d'Emploi du Temps</h4>
                    <p>Les modifications sont communiquées via l'application mobile et le carnet de liaison.</p>
                  </div>
                  <div className="info-item">
                    <h4>Absence d'un Professeur</h4>
                    <p>Les parents sont informés par SMS en cas d'absence imprévue.</p>
                  </div>
                  <div className="info-item">
                    <h4>Rattrapage de Cours</h4>
                    <p>Les cours de rattrapage sont organisés selon le planning affiché.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <style>
        {`
        .page-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 20px;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }

        .page-header {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          padding: 40px 30px;
          border-radius: 12px;
          margin-bottom: 30px;
          text-align: center;
        }

        .page-title {
          font-size: 2.5rem;
          margin: 0 0 10px 0;
          font-weight: 700;
        }

        .page-subtitle {
          font-size: 1.2rem;
          margin: 0;
          opacity: 0.9;
        }

        .tabs-container {
          margin-bottom: 30px;
        }

        .tabs-nav {
          display: flex;
          background: white;
          border-radius: 12px;
          padding: 8px;
          box-shadow: 0 2px 10px rgba(0,0,0,0.1);
          gap: 4px;
        }

        .tab-button {
          flex: 1;
          padding: 15px 20px;
          background: transparent;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          font-size: 1rem;
          font-weight: 500;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          transition: all 0.3s ease;
          color: #64748b;
        }

        .tab-button.active {
          background: #667eea;
          color: white;
        }

        .tab-button:hover:not(.active) {
          background: #f1f5f9;
        }

        .tab-icon {
          width: 20px;
          height: 20px;
        }

        .tab-content {
          min-height: 600px;
        }

        .content-section {
          background: white;
          padding: 30px;
          border-radius: 12px;
          box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }

        .section-title {
          font-size: 2rem;
          margin: 0 0 30px 0;
          color: #1e293b;
          font-weight: 600;
        }

        .subsection-title {
          font-size: 1.5rem;
          margin: 30px 0 20px 0;
          color: #334155;
          font-weight: 600;
        }

        .info-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 20px;
          margin-bottom: 30px;
        }

        .info-card {
          background: #f8fafc;
          padding: 25px;
          border-radius: 12px;
          border: 1px solid #e2e8f0;
        }

        .card-header {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 15px;
        }

        .card-icon {
          width: 24px;
          height: 24px;
          color: #667eea;
        }

        .card-header h3 {
          margin: 0;
          font-size: 1.2rem;
          color: #1e293b;
        }

        .actions-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .actions-list li {
          padding: 8px 0;
          border-bottom: 1px solid #e2e8f0;
        }

        .actions-list li:last-child {
          border-bottom: none;
        }

        .contact-info {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .contact-info p {
          display: flex;
          align-items: center;
          gap: 8px;
          margin: 0;
        }

        .contact-icon {
          width: 16px;
          height: 16px;
          color: #667eea;
        }

        .bureau-section {
          margin-top: 30px;
        }

        .bureau-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 20px;
        }

        .membre-card {
          background: white;
          padding: 20px;
          border-radius: 12px;
          border: 1px solid #e2e8f0;
          text-align: center;
        }

        .membre-photo {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          background: #e2e8f0;
          margin: 0 auto 15px;
        }

        .membre-card h4 {
          margin: 0 0 5px 0;
          color: #1e293b;
        }

        .membre-card p {
          margin: 0;
          color: #667eea;
          font-weight: 500;
        }

        .organisation-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 20px;
          margin-bottom: 30px;
        }

        .organisation-card {
          background: #f8fafc;
          padding: 25px;
          border-radius: 12px;
          border: 1px solid #e2e8f0;
        }

        .horaires-content, .acces-content, .personnel-content {
          display: flex;
          flex-direction: column;
          gap: 15px;
        }

        .horaire-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 10px 0;
          border-bottom: 1px solid #e2e8f0;
        }

        .horaire-item:last-child {
          border-bottom: none;
        }

        .horaire-label {
          font-weight: 500;
          color: #1e293b;
        }

        .horaire-time {
          color: #667eea;
          font-weight: 600;
        }

        .acces-item, .personnel-item {
          padding: 10px 0;
          border-bottom: 1px solid #e2e8f0;
        }

        .acces-item:last-child, .personnel-item:last-child {
          border-bottom: none;
        }

        .acces-item h4, .personnel-item h4 {
          margin: 0 0 5px 0;
          color: #1e293b;
        }

        .acces-item p, .personnel-item p {
          margin: 0;
          color: #64748b;
        }

        .procedures-section {
          margin-top: 30px;
        }

        .procedures-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 20px;
        }

        .procedure-step {
          display: flex;
          gap: 15px;
          padding: 20px;
          background: white;
          border-radius: 12px;
          border: 1px solid #e2e8f0;
        }

        .step-number {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: #667eea;
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 600;
          flex-shrink: 0;
        }

        .step-content h4 {
          margin: 0 0 8px 0;
          color: #1e293b;
        }

        .step-content p {
          margin: 0;
          color: #64748b;
          font-size: 0.9rem;
        }

        .emplois-container {
          display: flex;
          flex-direction: column;
          gap: 30px;
        }

        .niveau-selector {
          display: flex;
          justify-content: center;
        }

        .niveau-select {
          padding: 12px 20px;
          border: 2px solid #e2e8f0;
          border-radius: 8px;
          font-size: 1rem;
          background: white;
          cursor: pointer;
        }

        .niveau-select:focus {
          outline: none;
          border-color: #667eea;
        }

        .emploi-temps-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 20px;
        }

        .emploi-card {
          background: #f8fafc;
          border-radius: 12px;
          border: 1px solid #e2e8f0;
          overflow: hidden;
        }

        .emploi-header {
          background: #667eea;
          color: white;
          padding: 20px;
          text-align: center;
        }

        .emploi-header h3 {
          margin: 0;
          font-size: 1.1rem;
        }

        .emploi-placeholder {
          padding: 40px 20px;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 15px;
        }

        .emploi-icon {
          width: 48px;
          height: 48px;
          color: #94a3b8;
        }

        .emploi-placeholder p {
          margin: 0;
          color: #64748b;
          font-size: 1.1rem;
        }

        .download-btn {
          padding: 10px 20px;
          background: #667eea;
          color: white;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          font-weight: 500;
          transition: background 0.3s ease;
        }

        .download-btn:hover {
          background: #5a67d8;
        }

        .infos-importantes {
          margin-top: 30px;
        }

        .infos-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 20px;
        }

        .info-item {
          background: white;
          padding: 20px;
          border-radius: 12px;
          border: 1px solid #e2e8f0;
        }

        .info-item h4 {
          margin: 0 0 10px 0;
          color: #1e293b;
          font-size: 1.1rem;
        }

        .info-item p {
          margin: 0;
          color: #64748b;
          line-height: 1.5;
        }

        @media (max-width: 768px) {
          .page-container {
            padding: 15px;
          }
          
          .page-title {
            font-size: 2rem;
          }
          
          .tabs-nav {
            flex-direction: column;
            gap: 8px;
          }
          
          .tab-button {
            justify-content: flex-start;
          }
          
          .content-section {
            padding: 20px;
          }
          
          .info-grid, .organisation-grid, .procedures-grid, .emploi-temps-grid, .infos-grid {
            grid-template-columns: 1fr;
          }
          
          .bureau-grid {
            grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
          }
        }
        `}
      </style>
    </div>
  );
};

export default EspaceParents;