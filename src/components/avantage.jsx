import React from 'react';
import enfant from '../assets/enfant.png';
import avantage2 from '../assets/avantage2.gif';


const Avantages = () => {
  return (
    <div className="page-container">
      {/* Section Hero avec image et titre principal */}
      <div className="hero-section">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="main-title">
              Accompagner tous nos élèves de la petite enfance au seuil 
              de l'âge adulte, dans des parcours d'excellence qui favorisent 
              l'épanouissement de chacun.
            </h1>
          </div>
          <div className="hero-image">
            {/* Espace réservé pour votre image */}
            <div className="image-placeholder">
            <img src={avantage2} alt="avantage2" className="image-texte" />

            </div>
          </div>
        </div>
      </div>

      {/* Section Modèle Pédagogique */}
      <div className="content-section">
        <div className="content-wrapper">
          <div className="text-content">
            <h2 className="section-title">Notre modèle pédagogique</h2>
            <p className="section-text">
              Le plurilinguisme (français, arabe, anglais, espagnol) avec des classes internationales dès la maternelle.
            </p>
          </div>
          <div className="content-image">
            {/* Espace réservé pour votre image */}
            <div className="image-placeholder small">
             <img src={enfant} alt="Modèle pédagogique" className="image-texte" />

            </div>
          </div>
        </div>
      </div>

      {/* Section Vision */}
      <div className="vision-section">
        <div className="vision-card">
          <h3 className="card-title vision-title">
            <span className="card-icon green"></span>
            Notre Vision
          </h3>
          <p className="card-text">
            Offrir à chaque élève un environnement stimulant, bienveillant et exigeant, pour qu'il puisse révéler son plein potentiel, de la maternelle au lycée.
          </p>
        </div>
      </div>

      {/* Section Fondements */}
      <div className="fondements-section">
        <div className="fondements-card">
          <h3 className="card-title fondements-title">
            <span className="card-icon purple"></span>
            Nos Fondements
          </h3>
          <p className="card-text">
            Un équilibre harmonieux entre rigueur académique, ouverture interculturelle et développement personnel, ancrés dans les valeurs citoyennes et humaines.
          </p>
        </div>
      </div>

      {/* Section Approche */}
      <div className="approche-section">
        <div className="approche-card">
          <h3 className="card-title approche-title">
            <span className="card-icon orange"></span>
            Notre Approche Pédagogique
          </h3>
          <p className="card-text">
            Une méthode innovante qui place l'élève au centre de son apprentissage, favorisant l'autonomie, la créativité et l'excellence académique.
          </p>
        </div>
      </div>
    
<style jsx>{ `
    /* Styles généraux */
.page-container {
  background-color: #f9fafb;
  min-height: 100vh;
}

/* Section Hero */
.hero-section {
  background-color: white;
  padding: 64px 24px;
}

.hero-content {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 48px;
}

.hero-text {
  flex: 1;
}

.main-title {
  font-size: 2rem;
  font-weight: bold;
  color: #374151;
  line-height: 1.6;
}

.hero-image {
  flex: 1;
}

.image-placeholder {
  background-color: #e5e7eb;
  height: 400px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px dashedrgb(255, 255, 255);
}
  .image-placeholder img {
  height: 100%;
  width: auto;
  object-fit: contain;
  display: block;
}

.image-placeholder.small {
  height: 300px;
}

.image-text {
  color:rgb(110, 114, 122);
  font-weight: 800;
}

/* Section Contenu */
.content-section {
  background-color: #eff6ff;
  padding: 64px 24px;
}

.content-wrapper {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 48px;
}

.text-content {
  flex: 1;
}

.section-title {
  font-size: 1.875rem;
  font-weight: bold;
  color: #1e40af;
  margin-bottom: 24px;
}

.section-text {
  font-size: 1.125rem;
  color: #374151;
  line-height: 1.6;
}

.content-image {
  flex: 1;
}

/* Sections des cartes */
.vision-section {
  background-color: rgb(247, 247, 247);
  padding: 48px 24px;
}

.fondements-section {
  background-color:rgb(247, 247, 247);
  padding: 48px 24px;
}

.approche-section {
  background-color:rgb(247, 247, 247);
  padding: 48px 24px;
}

/* Styles des cartes */
.vision-card,
.fondements-card,
.approche-card {
  max-width: 1000px;
  margin: 0 auto;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  padding: 32px;
}

.card-title {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
}

.vision-title {
  color: #166534;
}

.fondements-title {
  color: #7c2d12;
}

.approche-title {
  color: #9a3412;
}

.card-icon {
  width: 16px;
  height: 16px;
  border-radius: 4px;
  margin-right: 12px;
}

.card-icon.green {
  background-color: #16a34a;
}

.card-icon.purple {
  background-color: #9333ea;
}

.card-icon.orange {
  background-color: #ea580c;
}

.card-text {
  color: #374151;
  line-height: 1.6;
}

/* Responsive Design */
@media (min-width: 1024px) {
  .hero-content,
  .content-wrapper {
    flex-direction: row;
  }
  
  .main-title {
    font-size: 2.25rem; }
  `}

</style>
</div>
  );
}

export default Avantages;