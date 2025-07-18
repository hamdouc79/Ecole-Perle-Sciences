import React, { useState } from "react";
import {
  Users,
  BookOpen,
  Award,
  Mail,
  Phone,
  MapPin,
  Send,
  Check,
  Upload,
  FileText,
  X,
  AlertCircle,
} from "lucide-react";
import apiService from "../service/api";
const PageRecrutement = () => {
  const [formulaire, setFormulaire] = useState({
    nom: "",
    prenom: "",
    email: "",
    telephone: "",
    poste: "",
    message: "",
    cv: null,
  });

  const [envoye, setEnvoye] = useState(false);
  const [enCours, setEnCours] = useState(false);
  const [erreur, setErreur] = useState("");

  const handleChange = (e) => {
    setFormulaire({
      ...formulaire,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Vérifier le type de fichier
      const allowedTypes = [
        "application/pdf",
        "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      ];
      if (!allowedTypes.includes(file.type)) {
        setErreur("Seuls les fichiers PDF, DOC et DOCX sont autorisés");
        return;
      }

      // Vérifier la taille (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        setErreur("La taille du fichier ne doit pas dépasser 5MB");
        return;
      }

      setErreur("");
      setFormulaire({
        ...formulaire,
        cv: file,
      });
    }
  };

  const supprimerCV = () => {
    setFormulaire({
      ...formulaire,
      cv: null,
    });
    // Réinitialiser l'input file
    const fileInput = document.getElementById("cv-upload");
    if (fileInput) {
      fileInput.value = "";
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErreur("");
    setEnCours(true);

    try {
      // Créer FormData pour l'envoi
      const formData = new FormData();
      formData.append("nom", formulaire.nom);
      formData.append("prenom", formulaire.prenom);
      formData.append("email", formulaire.email);
      formData.append("telephone", formulaire.telephone);
      formData.append("posteSouhaite", formulaire.poste);
      formData.append("messageMotivation", formulaire.message);

      if (formulaire.cv) {
        formData.append("cv", formulaire.cv);
      }

      // Simuler l'appel API - remplacez par votre vraie logique
      // await apiService.createJobApplication(formData);

      // Simulation d'un délai
      await apiService.createJobApplication(formData);
      setEnvoye(true);

      // Réinitialiser le formulaire
      setFormulaire({
        nom: "",
        prenom: "",
        email: "",
        telephone: "",
        poste: "",
        message: "",
        cv: null,
      });

      // Réinitialiser l'input file
      const fileInput = document.getElementById("cv-upload");
      if (fileInput) {
        fileInput.value = "";
      }

      setTimeout(() => setEnvoye(false), 5000);
    } catch (error) {
      setErreur(error.message || "Erreur lors de l'envoi de la candidature");
    } finally {
      setEnCours(false);
    }
  };

  const scrollToForm = () => {
    document.querySelector(".section-formulaire").scrollIntoView({
      behavior: "smooth",
    });
  };

  const postes = [
    {
      titre: "Enseignant(e) Primaire",
      type: "Temps plein",
      icone: <BookOpen className="icone-poste" />,
      description:
        "Nous cherchons un enseignant passionné pour nos classes de primaire.",
    },
    {
      titre: "Professeur de Mathématiques",
      type: "Temps plein",
      icone: <Award className="icone-poste" />,
      description:
        "Poste pour enseigner les mathématiques au collège et lycée.",
    },
    {
      titre: "Surveillant(e)",
      type: "Temps partiel",
      icone: <Users className="icone-poste" />,
      description: "Accompagner et surveiller les élèves pendant les pauses.",
    },
  ];

  const avantages = [
    "Salaire compétitif",
    "Formation continue",
    "Environnement bienveillant",
    "Équipe dynamique",
    "Matériel moderne",
    "Évolution de carrière",
  ];

  return (
    <div className="page-recrutement">
      {/* En-tête */}
      <section className="entete-recrutement">
        <div className="particules-background">
          <div className="particule"></div>
          <div className="particule"></div>
          <div className="particule"></div>
          <div className="particule"></div>
          <div className="particule"></div>
          <div className="particule"></div>
        </div>
        <div className="contenu-entete">
          <div className="badge-recrutement">
            <span className="texte-badge">🚀 Nous recrutons</span>
          </div>
          <h1 className="titre-principal">
            Façonnez l'Avenir de
            <span className="texte-gradient"> l'Éducation</span>
          </h1>
          <p className="sous-titre">
            Rejoignez une équipe passionnée qui transforme l'apprentissage en
            expérience extraordinaire
          </p>
          <div className="boutons-action">
            <button className="bouton-principal" onClick={scrollToForm}>
              Postuler Maintenant
            </button>
            <button
              className="bouton-secondaire"
              onClick={() =>
                document
                  .querySelector(".section-postes")
                  .scrollIntoView({ behavior: "smooth" })
              }
            >
              Voir les Postes
            </button>
          </div>
        </div>
        <div className="forme-decorative">
          <div className="cercle-1"></div>
          <div className="cercle-2"></div>
          <div className="cercle-3"></div>
        </div>
      </section>

      {/* Présentation */}
      <section className="section-presentation">
        <div className="conteneur">
          <div className="texte-presentation">
            <h2 className="titre-section">Pourquoi Nous Rejoindre ?</h2>
            <p className="description">
              Notre école privée offre un environnement d'apprentissage
              exceptionnel où chaque membre de l'équipe contribue au succès de
              nos élèves. Nous recherchons des professionnels passionnés qui
              partagent nos valeurs d'excellence et de bienveillance.
            </p>
          </div>
        </div>
      </section>

      {/* Postes disponibles */}
      <section className="section-postes">
        <div className="conteneur">
          <h2 className="titre-section">Postes Disponibles</h2>
          <div className="grille-postes">
            {postes.map((poste, index) => (
              <div key={index} className="carte-poste">
                <div className="entete-carte">
                  {poste.icone}
                  <div className="info-poste">
                    <h3 className="titre-poste">{poste.titre}</h3>
                    <span className="type-poste">{poste.type}</span>
                  </div>
                </div>
                <p className="description-poste">{poste.description}</p>
                <button className="bouton-candidater" onClick={scrollToForm}>
                  Candidater
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Avantages */}
      <section className="section-avantages">
        <div className="conteneur">
          <h2 className="titre-section">Nos Avantages</h2>
          <div className="grille-avantages">
            {avantages.map((avantage, index) => (
              <div key={index} className="carte-avantage">
                <Check className="icone-check" />
                <span className="texte-avantage">{avantage}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Formulaire de candidature */}
      <section className="section-formulaire">
        <div className="conteneur">
          <h2 className="titre-section">Postulez Maintenant</h2>
          <form className="formulaire-candidature" onSubmit={handleSubmit}>
            <div className="ligne-formulaire">
              <div className="champ-formulaire">
                <label className="label-formulaire">Nom *</label>
                <input
                  type="text"
                  name="nom"
                  value={formulaire.nom}
                  onChange={handleChange}
                  className="input-formulaire"
                  required
                />
              </div>
              <div className="champ-formulaire">
                <label className="label-formulaire">Prénom *</label>
                <input
                  type="text"
                  name="prenom"
                  value={formulaire.prenom}
                  onChange={handleChange}
                  className="input-formulaire"
                  required
                />
              </div>
            </div>

            <div className="ligne-formulaire">
              <div className="champ-formulaire">
                <label className="label-formulaire">Email *</label>
                <input
                  type="email"
                  name="email"
                  value={formulaire.email}
                  onChange={handleChange}
                  className="input-formulaire"
                  required
                />
              </div>
              <div className="champ-formulaire">
                <label className="label-formulaire">Téléphone</label>
                <input
                  type="tel"
                  name="telephone"
                  value={formulaire.telephone}
                  onChange={handleChange}
                  className="input-formulaire"
                />
              </div>
            </div>

            <div className="champ-formulaire">
              <label className="label-formulaire">Poste souhaité *</label>
              <select
                name="poste"
                value={formulaire.poste}
                onChange={handleChange}
                className="select-formulaire"
                required
              >
                <option value="">Sélectionnez un poste</option>
                <option value="enseignant-primaire">
                  Enseignant(e) Primaire
                </option>
                <option value="professeur-maths">
                  Professeur de Mathématiques
                </option>
                <option value="surveillant">Surveillant(e)</option>
                <option value="autre">Candidature spontanée</option>
              </select>
            </div>

            {/* Section Upload CV */}
            <div className="champ-formulaire">
              <label className="label-formulaire">
                CV * (PDF, DOC, DOCX - Max 5MB)
              </label>
              <div className="zone-upload">
                {!formulaire.cv ? (
                  <div className="zone-drag-drop">
                    <Upload className="icone-upload" />
                    <p className="texte-upload">
                      Glissez votre CV ici ou
                      <label htmlFor="cv-upload" className="lien-upload">
                        {" "}
                        cliquez pour parcourir
                      </label>
                    </p>
                    <input
                      id="cv-upload"
                      type="file"
                      accept=".pdf,.doc,.docx"
                      name="FILE-cv"
                      onChange={handleFileChange}
                      className="input-file-cache"
                    />
                  </div>
                ) : (
                  <div className="fichier-selectionne">
                    <div className="info-fichier">
                      <FileText className="icone-fichier" />
                      <div className="details-fichier">
                        <span className="nom-fichier">
                          {formulaire.cv.name}
                        </span>
                        <span className="taille-fichier">
                          {(formulaire.cv.size / 1024 / 1024).toFixed(2)} MB
                        </span>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={supprimerCV}
                      className="bouton-supprimer"
                    >
                      <X className="icone-supprimer" />
                    </button>
                  </div>
                )}
              </div>
            </div>

            <div className="champ-formulaire">
              <label className="label-formulaire">Message de motivation</label>
              <textarea
                name="message"
                value={formulaire.message}
                onChange={handleChange}
                className="textarea-formulaire"
                rows="4"
                placeholder="Parlez-nous de votre motivation et de votre expérience..."
              ></textarea>
            </div>

            {erreur && (
              <div className="message-erreur">
                <AlertCircle className="icone-erreur" />
                {erreur}
              </div>
            )}

            <button type="submit" className="bouton-envoyer" disabled={enCours}>
              {enCours ? (
                <>
                  <div className="spinner"></div>
                  Envoi en cours...
                </>
              ) : (
                <>
                  <Send className="icone-envoyer" />
                  Envoyer ma candidature
                </>
              )}
            </button>

            {envoye && (
              <div className="message-succes">
                <Check className="icone-succes" />
                Votre candidature a été envoyée avec succès !
              </div>
            )}
          </form>
        </div>
      </section>

      {/* Contact */}
      <section className="section-contact">
        <div className="conteneur">
          <h2 className="titre-section">Contactez-nous</h2>
          <div className="info-contact">
            <div className="item-contact">
              <Mail className="icone-contact" />
              <span>recrutement@ecole-privee.fr</span>
            </div>
            <div className="item-contact">
              <Phone className="icone-contact" />
              <span>05 35 XX XX XX</span>
            </div>
            <div className="item-contact">
              <MapPin className="icone-contact" />
              <span>123 Rue de l'Éducation, Fès</span>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .page-recrutement {
          font-family: "Arial", sans-serif;
          line-height: 1.6;
          color: #333;
        }

        .entete-recrutement {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          padding: 100px 0;
          text-align: center;
          position: relative;
          overflow: hidden;
          min-height: 600px;
          display: flex;
          align-items: center;
        }

        .particules-background {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
        }

        .particule {
          position: absolute;
          width: 20px;
          height: 20px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 50%;
          animation: float 6s ease-in-out infinite;
        }

        .particule:nth-child(1) {
          top: 20%;
          left: 10%;
          animation-delay: 0s;
        }

        .particule:nth-child(2) {
          top: 60%;
          left: 20%;
          animation-delay: 1s;
        }

        .particule:nth-child(3) {
          top: 30%;
          left: 80%;
          animation-delay: 2s;
        }

        .particule:nth-child(4) {
          top: 80%;
          left: 70%;
          animation-delay: 3s;
        }

        .particule:nth-child(5) {
          top: 10%;
          left: 60%;
          animation-delay: 4s;
        }

        .particule:nth-child(6) {
          top: 70%;
          left: 30%;
          animation-delay: 5s;
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

        .contenu-entete {
          max-width: 800px;
          margin: 0 auto;
          padding: 0 20px;
          position: relative;
          z-index: 2;
        }

        .badge-recrutement {
          display: inline-block;
          background: rgba(255, 255, 255, 0.2);
          backdrop-filter: blur(10px);
          padding: 8px 20px;
          border-radius: 25px;
          margin-bottom: 30px;
          border: 1px solid rgba(255, 255, 255, 0.3);
        }

        .texte-badge {
          font-size: 0.9rem;
          font-weight: 600;
        }

        .titre-principal {
          font-size: 3.5rem;
          margin-bottom: 1.5rem;
          font-weight: 800;
          line-height: 1.2;
        }

        .texte-gradient {
          background: linear-gradient(45deg, #ffd700, #ffa500);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .sous-titre {
          font-size: 1.3rem;
          opacity: 0.9;
          margin-bottom: 40px;
          line-height: 1.6;
        }

        .boutons-action {
          display: flex;
          gap: 20px;
          justify-content: center;
          flex-wrap: wrap;
        }

        .bouton-principal {
          background: linear-gradient(45deg, #ffd700, #ffa500);
          color: #333;
          border: none;
          padding: 15px 35px;
          border-radius: 50px;
          font-size: 1.1rem;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(255, 215, 0, 0.3);
        }

        .bouton-principal:hover {
          transform: translateY(-3px);
          box-shadow: 0 6px 20px rgba(255, 215, 0, 0.5);
        }

        .bouton-secondaire {
          background: transparent;
          color: white;
          border: 2px solid rgba(255, 255, 255, 0.5);
          padding: 13px 35px;
          border-radius: 50px;
          font-size: 1.1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          backdrop-filter: blur(5px);
        }

        .bouton-secondaire:hover {
          background: rgba(255, 255, 255, 0.1);
          border-color: rgba(255, 255, 255, 0.8);
          transform: translateY(-2px);
        }

        .forme-decorative {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
        }

        .cercle-1,
        .cercle-2,
        .cercle-3 {
          position: absolute;
          border-radius: 50%;
          background: linear-gradient(
            45deg,
            rgba(255, 255, 255, 0.1),
            rgba(255, 255, 255, 0.05)
          );
          backdrop-filter: blur(10px);
        }

        .cercle-1 {
          width: 200px;
          height: 200px;
          top: 10%;
          right: 10%;
          animation: rotate 20s linear infinite;
        }

        .cercle-2 {
          width: 150px;
          height: 150px;
          bottom: 15%;
          left: 15%;
          animation: rotate 15s linear infinite reverse;
        }

        .cercle-3 {
          width: 100px;
          height: 100px;
          top: 50%;
          right: 20%;
          animation: rotate 25s linear infinite;
        }

        @keyframes rotate {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .conteneur {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .section-presentation,
        .section-postes,
        .section-avantages,
        .section-formulaire,
        .section-contact {
          padding: 60px 0;
        }

        .section-presentation {
          background: #f8f9fa;
        }

        .titre-section {
          font-size: 2.5rem;
          text-align: center;
          margin-bottom: 3rem;
          color: #2c3e50;
        }

        .description {
          font-size: 1.1rem;
          text-align: center;
          max-width: 800px;
          margin: 0 auto;
          color: #666;
        }

        .grille-postes {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 30px;
          margin-top: 40px;
        }

        .carte-poste {
          background: white;
          border-radius: 12px;
          padding: 30px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s ease;
        }

        .carte-poste:hover {
          transform: translateY(-5px);
        }

        .entete-carte {
          display: flex;
          align-items: center;
          margin-bottom: 20px;
        }

        .icone-poste {
          width: 40px;
          height: 40px;
          color: #3498db;
          margin-right: 15px;
        }

        .titre-poste {
          font-size: 1.3rem;
          margin-bottom: 5px;
          color: #2c3e50;
        }

        .type-poste {
          background: #e8f4f8;
          color: #3498db;
          padding: 4px 12px;
          border-radius: 20px;
          font-size: 0.9rem;
          font-weight: 500;
        }

        .description-poste {
          color: #666;
          margin-bottom: 25px;
          line-height: 1.6;
        }

        .bouton-candidater {
          background: #3498db;
          color: white;
          border: none;
          padding: 12px 25px;
          border-radius: 8px;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          transition: background 0.3s ease;
          width: 100%;
        }

        .bouton-candidater:hover {
          background: #2980b9;
        }

        .section-avantages {
          background: #f8f9fa;
        }

        .grille-avantages {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 20px;
          margin-top: 40px;
        }

        .carte-avantage {
          display: flex;
          align-items: center;
          background: white;
          padding: 20px;
          border-radius: 8px;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
        }

        .icone-check {
          width: 24px;
          height: 24px;
          color: #27ae60;
          margin-right: 15px;
        }

        .texte-avantage {
          font-weight: 500;
          color: #2c3e50;
        }

        .section-formulaire {
          background: #f8f9fa;
        }

        .formulaire-candidature {
          max-width: 600px;
          margin: 0 auto;
          background: white;
          padding: 40px;
          border-radius: 12px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
        }

        .ligne-formulaire {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
          margin-bottom: 20px;
        }

        .champ-formulaire {
          margin-bottom: 20px;
        }

        .label-formulaire {
          display: block;
          margin-bottom: 8px;
          font-weight: 600;
          color: #2c3e50;
        }

        .input-formulaire,
        .select-formulaire,
        .textarea-formulaire {
          width: 100%;
          padding: 12px;
          border: 2px solid #e9ecef;
          border-radius: 8px;
          font-size: 1rem;
          transition: border-color 0.3s ease;
        }

        .input-formulaire:focus,
        .select-formulaire:focus,
        .textarea-formulaire:focus {
          outline: none;
          border-color: #3498db;
        }

        .textarea-formulaire {
          resize: vertical;
        }

        /* Styles pour l'upload de CV */
        .zone-upload {
          margin-top: 8px;
        }

        .zone-drag-drop {
          border: 2px dashed #3498db;
          border-radius: 8px;
          padding: 40px 20px;
          text-align: center;
          background: #f8f9fa;
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .zone-drag-drop:hover {
          background: #e3f2fd;
          border-color: #2980b9;
        }

        .icone-upload {
          width: 48px;
          height: 48px;
          color: #3498db;
          margin-bottom: 15px;
        }

        .texte-upload {
          color: #666;
          font-size: 1rem;
        }

        .lien-upload {
          color: #3498db;
          font-weight: 600;
          cursor: pointer;
          text-decoration: underline;
        }

        .input-file-cache {
          display: none;
        }

        .fichier-selectionne {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 15px;
          background: #e8f5e8;
          border: 1px solid #27ae60;
          border-radius: 8px;
        }

        .info-fichier {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .icone-fichier {
          width: 24px;
          height: 24px;
          color: #27ae60;
        }

        .details-fichier {
          display: flex;
          flex-direction: column;
        }

        .nom-fichier {
          font-weight: 600;
          color: #2c3e50;
        }

        .taille-fichier {
          font-size: 0.9rem;
          color: #666;
        }

        .bouton-supprimer {
          background: #e74c3c;
          color: white;
          border: none;
          border-radius: 50%;
          width: 32px;
          height: 32px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background 0.3s ease;
        }

        .bouton-supprimer:hover {
          background: #c0392b;
        }

        .icone-supprimer {
          width: 16px;
          height: 16px;
        }

        .bouton-envoyer {
          background: #27ae60;
          color: white;
          border: none;
          padding: 15px 30px;
          border-radius: 8px;
          font-size: 1.1rem;
          font-weight: 600;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          width: 100%;
          transition: background 0.3s ease;
        }

        .bouton-envoyer:hover:not(:disabled) {
          background: #219a52;
        }

        .bouton-envoyer:disabled {
          background: #95a5a6;
          cursor: not-allowed;
        }

        .icone-envoyer {
          width: 20px;
          height: 20px;
        }

        .spinner {
          width: 20px;
          height: 20px;
          border: 2px solid #ffffff;
          border-top: 2px solid transparent;
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        .message-succes {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-top: 20px;
          padding: 15px;
          background: #d4edda;
          border: 1px solid #c3e6cb;
          border-radius: 8px;
          color: #155724;
          font-weight: 500;
        }

        .message-erreur {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-top: 10px;
          padding: 15px;
          background: #f8d7da;
          border: 1px solid #f5c6cb;
          border-radius: 8px;
          color: #721c24;
          font-weight: 500;
        }

        .icone-succes,
        .icone-erreur {
          width: 20px;
          height: 20px;
        }

        .info-contact {
          display: flex;
          justify-content: center;
          gap: 40px;
          flex-wrap: wrap;
          margin-top: 40px;
        }

        .item-contact {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 1.1rem;
        }

        .icone-contact {
          width: 24px;
          height: 24px;
          color: #3498db;
        }

        @media (max-width: 768px) {
          .titre-principal {
            font-size: 2.5rem;
          }

          .boutons-action {
            flex-direction: column;
            align-items: center;
          }

          .bouton-principal,
          .bouton-secondaire {
            width: 100%;
            max-width: 300px;
          }

          .ligne-formulaire {
            grid-template-columns: 1fr;
          }

          .info-contact {
            flex-direction: column;
            align-items: center;
            gap: 20px;
          }

          .grille-postes {
            grid-template-columns: 1fr;
          }

          .cercle-1,
          .cercle-2,
          .cercle-3 {
            display: none;
          }

          .zone-drag-drop {
            padding: 30px 15px;
          }

          .fichier-selectionne {
            flex-direction: column;
            gap: 15px;
            align-items: flex-start;
          }

          .info-fichier {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
};

export default PageRecrutement;
