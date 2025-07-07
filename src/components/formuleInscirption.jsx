import React, { useState } from 'react';
import './form.css';

const InscriptionForm = () => {
  // État pour stocker les données du formulaire
  const [formData, setFormData] = useState({
    prenom: '',
    nom: '',
    email: '',
    telephone: '',
    dateNaissance: '',
    genre: '',
    niveau: '',
    classe: '',
    adresse: '',
    ville: '',
    codePostal: '',
    nomParent: '',
    telephoneParent: '',
    emailParent: ''
  });

  // Fonction pour gérer les changements dans les champs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Fonction pour soumettre le formulaire
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Données du formulaire:', formData);
    alert('Inscription soumise avec succès !');
  };

  return (
    <>
      <div className="form-container">
        <div className="form-card">
          <h1 className="form-title">Inscription Étudiant</h1>
          <p className="form-subtitle">Veuillez remplir tous les champs pour finaliser votre inscription</p>
          
          <form onSubmit={handleSubmit}>
            {/* Section Informations Personnelles */}
            <div className="form-section">
              <h2 className="section-title">Informations Personnelles</h2>
              
              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">Prénom *</label>
                  <input
                    type="text"
                    name="prenom"
                    value={formData.prenom}
                    onChange={handleChange}
                    className="form-input"
                    required
                    placeholder="Votre prénom"
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Nom *</label>
                  <input
                    type="text"
                    name="nom"
                    value={formData.nom}
                    onChange={handleChange}
                    className="form-input"
                    required
                    placeholder="Votre nom"
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="form-input"
                    required
                    placeholder="votre.email@exemple.com"
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Téléphone *</label>
                  <input
                    type="tel"
                    name="telephone"
                    value={formData.telephone}
                    onChange={handleChange}
                    className="form-input"
                    required
                    placeholder="0612345678"
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">Date de Naissance *</label>
                  <input
                    type="date"
                    name="dateNaissance"
                    value={formData.dateNaissance}
                    onChange={handleChange}
                    className="form-input"
                    required
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Genre *</label>
                  <select
                    name="genre"
                    value={formData.genre}
                    onChange={handleChange}
                    className="form-select"
                    required
                  >
                    <option value="">Sélectionner</option>
                    <option value="masculin">Masculin</option>
                    <option value="feminin">Féminin</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Section Informations Scolaires */}
            <div className="form-section">
              <h2 className="section-title">Informations Scolaires</h2>
              
              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">Niveau d'Étude *</label>
                  <select
                    name="niveau"
                    value={formData.niveau}
                    onChange={handleChange}
                    className="form-select"
                    required
                  >
                    <option value="">Sélectionner le niveau</option>
                    <option value="maternelle">Maternelle</option>
                    <option value="primaire">Primaire</option>
                    <option value="college">Collège</option>
                    <option value="lycee">Lycée</option>
                  </select>
                </div>
                <div className="form-group">
                  <label className="form-label">Classe Souhaitée *</label>
                  <select
                    name="classe"
                    value={formData.classe}
                    onChange={handleChange}
                    className="form-select"
                    required
                  >
                    <option value="">Sélectionner la classe</option>
                    <option value="cp">CP</option>
                    <option value="ce1">CE1</option>
                    <option value="ce2">CE2</option>
                    <option value="cm1">CM1</option>
                    <option value="cm2">CM2</option>
                    <option value="6eme">6ème</option>
                    <option value="5eme">5ème</option>
                    <option value="4eme">4ème</option>
                    <option value="3eme">3ème</option>
                    <option value="seconde">Seconde</option>
                    <option value="premiere">Première</option>
                    <option value="terminale">Terminale</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Section Adresse */}
            <div className="form-section">
              <h2 className="section-title">Adresse</h2>
              
              <div className="form-group full-width">
                <label className="form-label">Adresse Complète *</label>
                <textarea
                  name="adresse"
                  value={formData.adresse}
                  onChange={handleChange}
                  className="form-textarea"
                  required
                  placeholder="Numéro, rue, quartier..."
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">Ville *</label>
                  <input
                    type="text"
                    name="ville"
                    value={formData.ville}
                    onChange={handleChange}
                    className="form-input"
                    required
                    placeholder="Votre ville"
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Code Postal *</label>
                  <input
                    type="text"
                    name="codePostal"
                    value={formData.codePostal}
                    onChange={handleChange}
                    className="form-input"
                    required
                    placeholder="30000"
                  />
                </div>
              </div>
            </div>

            {/* Section Parent/Tuteur */}
            <div className="form-section">
              <h2 className="section-title">Informations Parent/Tuteur</h2>
              
              <div className="form-group full-width">
                <label className="form-label">Nom Complet du Parent/Tuteur *</label>
                <input
                  type="text"
                  name="nomParent"
                  value={formData.nomParent}
                  onChange={handleChange}
                  className="form-input"
                  required
                  placeholder="Nom et prénom du parent/tuteur"
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">Téléphone Parent *</label>
                  <input
                    type="tel"
                    name="telephoneParent"
                    value={formData.telephoneParent}
                    onChange={handleChange}
                    className="form-input"
                    required
                    placeholder="0612345678"
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Email Parent</label>
                  <input
                    type="email"
                    name="emailParent"
                    value={formData.emailParent}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="parent@exemple.com"
                  />
                </div>
              </div>
            </div>

            <button type="submit" className="submit-button">
              Soumettre l'Inscription
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default InscriptionForm;