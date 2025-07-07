import React from 'react';
import './Ecole.css';

const Ecole = () => {
  return (
    <main className="ecole-page">
      {/* Section Présentation */}
      <section className="presentation-section">
        <div className="section-container">
          <h1 className="page-title">Notre École</h1>
          
          <div className="presentation-content">
            <div className="presentation-text">
              <h2 className="section-title">Présentation de l'École</h2>
              <p className="text-paragraph">
                Le Lycée Français International André-Malraux est un établissement d'excellence qui accueille les élèves de la maternelle au lycée. Nous offrons un enseignement de qualité dans un environnement multiculturel et bienveillant.
              </p>
              <p className="text-paragraph">
                Notre mission est de former des citoyens du monde, ouverts sur les cultures et les langues, tout en maintenant les exigences académiques les plus élevées. Nous préparons nos élèves à réussir dans un monde en constante évolution.
              </p>
              <p className="text-paragraph">
                Situé à Rabat, notre établissement fait partie du réseau OSUI (Office Scolaire et Universitaire International) et propose un enseignement français de qualité au Maroc.
              </p>
            </div>
            
            <div className="presentation-image">
              <div className="image-box">
                <p className="image-placeholder-text">Photo de l'école</p>
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
                <p className="image-placeholder-text">Photo historique</p>
              </div>
            </div>
            
            <div className="historique-text">
              <h2 className="section-title">Historique de l'École</h2>
              <div className="timeline">
                <div className="timeline-item">
                  <div className="timeline-year">1995</div>
                  <div className="timeline-content">
                    <h3 className="timeline-title">Création de l'établissement</h3>
                    <p className="timeline-text">
                      Ouverture du Lycée Français International André-Malraux à Rabat.
                    </p>
                  </div>
                </div>
                
                <div className="timeline-item">
                  <div className="timeline-year">2000</div>
                  <div className="timeline-content">
                    <h3 className="timeline-title">Extension du primaire</h3>
                    <p className="timeline-text">
                      Agrandissement des locaux et développement des classes primaires.
                    </p>
                  </div>
                </div>
                
                <div className="timeline-item">
                  <div className="timeline-year">2010</div>
                  <div className="timeline-content">
                    <h3 className="timeline-title">Accréditation internationale</h3>
                    <p className="timeline-text">
                      Obtention de la certification internationale et reconnaissance par l'OSUI.
                    </p>
                  </div>
                </div>
                
                <div className="timeline-item">
                  <div className="timeline-year">2020</div>
                  <div className="timeline-content">
                    <h3 className="timeline-title">Modernisation numérique</h3>
                    <p className="timeline-text">
                      Mise en place des outils numériques et adaptation à l'enseignement moderne.
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
            Une équipe pédagogique qualifiée et expérimentée, dédiée à la réussite de chaque élève.
          </p>
          
          <div className="equipe-grid">
            {/* Enseignant 1 */}
            <div className="enseignant-card">
              <div className="enseignant-photo">
                <div className="photo-placeholder">
                  <p className="photo-text">Photo enseignant</p>
                </div>
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
                <div className="photo-placeholder">
                  <p className="photo-text">Photo enseignant</p>
                </div>
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
                <div className="photo-placeholder">
                  <p className="photo-text">Photo enseignant</p>
                </div>
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
                <div className="photo-placeholder">
                  <p className="photo-text">Photo enseignant</p>
                </div>
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
                <div className="photo-placeholder">
                  <p className="photo-text">Photo enseignant</p>
                </div>
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
                <div className="photo-placeholder">
                  <p className="photo-text">Photo enseignant</p>
                </div>
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
    </main>
  );
};

export default Ecole;