import React, { useState } from "react";
import {
  FileText,
  Calendar,
  CheckCircle,
  Users,
  Award,
  Clock,
  Phone,
  Mail,
  MapPin,
  Download,
} from "lucide-react";

const ProcedureAdmission = () => {
  const [activeStep, setActiveStep] = useState(null);

  const etapes = [
    {
      numero: 1,
      titre: "Dossier de Candidature",
      description:
        "Téléchargez et complétez le dossier de candidature avec tous les documents requis",
      icone: <FileText className="icon" />,
      couleur: "blue",
      details:
        "Remplissez soigneusement le formulaire en ligne ou téléchargez la version PDF. Joignez tous les documents demandés.",
    },
    {
      numero: 2,
      titre: "Entretien d'Admission",
      description:
        "Rendez-vous individuel avec l'équipe pédagogique pour évaluer votre projet",
      icone: <Users className="icon" />,
      couleur: "green",
      details:
        "Entretien de 30 minutes avec le directeur pédagogique et un enseignant. Présentez votre projet éducatif.",
    },
    {
      numero: 3,
      titre: "Test d'Évaluation",
      description:
        "Évaluation des compétences et connaissances selon le niveau demandé",
      icone: <Award className="icon" />,
      couleur: "purple",
      details:
        "Tests adaptés au niveau : français, mathématiques et culture générale. Durée : 2 heures maximum.",
    },
    {
      numero: 4,
      titre: "Décision d'Admission",
      description:
        "Réponse sous 5 jours ouvrables par email et courrier officiel",
      icone: <CheckCircle className="icon" />,
      couleur: "emerald",
      details:
        "Notification par email suivie d'un courrier officiel. Instructions pour la finalisation de l'inscription.",
    },
  ];

  const documents = [
    "Formulaire d'inscription dûment rempli",
    "Photocopie de la carte d'identité nationale",
    "Relevés de notes des 3 dernières années",
    "Certificat de scolarité de l'établissement précédent",
    "Acte de naissance (copie légalisée)",
    "4 photos d'identité récentes",
    "Certificat médical de moins de 3 mois",
    "Justificatif de domicile des parents",
  ];

  const criteres = [
    {
      titre: "Excellence Académique",
      description:
        "Évaluation des résultats scolaires et du potentiel d'apprentissage",
    },
    {
      titre: "Motivation Personnelle",
      description: "Projet éducatif et engagement dans la vie scolaire",
    },
    {
      titre: "Adaptation Sociale",
      description: "Capacité d'intégration dans notre environnement éducatif",
    },
    {
      titre: "Valeurs Partagées",
      description: "Adhésion aux principes et valeurs de notre établissement",
    },
  ];

  const niveaux = [
    { niveau: "Primaire", prix: "1200 DH/mois", description: "CP à CM2" },
    { niveau: "Collège", prix: "1500 DH/mois", description: "6ème à 3ème" },
    { niveau: "Lycée", prix: "indisponible", description: "2nde à Terminale" },
  ];

  const services = [
    {
      service: "Transport Scolaire",
      prix: "300 DH/mois",
      description: "Plusieurs circuits disponibles",
    },
    {
      service: "Restauration",
      prix: "250 DH/mois",
      description: "Repas équilibrés",
    },
    {
      service: "Activités Parascolaires",
      prix: "0 DH/mois",
      description: "Sport, arts, langues",
    },
  ];

  return (
    <div className="admission-container">
      <style>{`
        .admission-container {
          min-height: 100vh;
          background-color: #f9fafb;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }

        .admission-header {
          background: linear-gradient(135deg, #2563eb 0%, #7c3aed 100%);
          color: white;
          padding: 64px 0;
          text-align: center;
          position: relative;
          overflow: hidden;
        }

        .admission-header::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" fill="white" opacity="0.1"><polygon points="0,0 1000,0 1000,100 0,80"/></svg>');
          background-size: cover;
        }

        .admission-header-content {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
          position: relative;
          z-index: 1;
        }

        .admission-header h1 {
          font-size: 3rem;
          font-weight: bold;
          margin-bottom: 16px;
          margin: 0;
          text-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }

        .admission-header p {
          font-size: 1.25rem;
          opacity: 0.9;
          max-width: 768px;
          margin: 16px auto 0;
        }

        .admission-main-content {
          max-width: 1200px;
          margin: 0 auto;
          padding: 64px 24px;
        }

        .admission-section {
          background: white;
          border-radius: 12px;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
          padding: 32px;
          margin-bottom: 48px;
          border: 1px solid #e5e7eb;
        }

        .admission-section h2 {
          font-size: 2rem;
          font-weight: bold;
          color: #1f2937;
          margin-bottom: 24px;
          text-align: center;
          position: relative;
        }

        .admission-section h2::after {
          content: '';
          position: absolute;
          bottom: -8px;
          left: 50%;
          transform: translateX(-50%);
          width: 80px;
          height: 3px;
          background: linear-gradient(90deg, #2563eb, #7c3aed);
          border-radius: 2px;
        }

        .admission-grid {
          display: grid;
          gap: 24px;
        }

        .admission-grid-2 {
          grid-template-columns: repeat(2, 1fr);
        }

        .admission-grid-3 {
          grid-template-columns: repeat(3, 1fr);
        }

        .admission-grid-4 {
          grid-template-columns: repeat(4, 1fr);
        }

        @media (max-width: 768px) {
          .admission-grid-2, .admission-grid-3, .admission-grid-4 {
            grid-template-columns: 1fr;
          }
          
          .admission-header h1 {
            font-size: 2rem;
          }
        }

        .admission-info-item {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 16px;
        }

        .admission-info-box {
          background: linear-gradient(135deg, #dbeafe 0%, #f0f9ff 100%);
          padding: 24px;
          border-radius: 8px;
          border: 1px solid #bfdbfe;
        }

        .admission-info-box h3 {
          font-weight: 600;
          color: #1e40af;
          margin-bottom: 8px;
        }

        .admission-info-box p {
          color: #1d4ed8;
          font-size: 0.875rem;
          margin: 0;
        }

        .admission-icon {
          width: 24px;
          height: 24px;
        }

        .admission-icon-blue {
          color: #2563eb;
        }

        .admission-etape-card {
          background: white;
          border-radius: 8px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          padding: 24px;
          text-align: center;
          transition: all 0.3s ease;
          border: 1px solid #e5e7eb;
          cursor: pointer;
          position: relative;
          overflow: hidden;
        }

        .admission-etape-card:hover {
          box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
          transform: translateY(-2px);
        }

        .admission-etape-card.active {
          border-color: #2563eb;
          box-shadow: 0 0 0 2px rgba(37, 99, 235, 0.1);
        }

        .admission-etape-icon {
          width: 64px;
          height: 64px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 16px;
          transition: all 0.3s ease;
        }

        .admission-etape-icon.blue {
          background: #dbeafe;
          color: #2563eb;
        }

        .admission-etape-icon.green {
          background: #dcfce7;
          color: #16a34a;
        }

        .admission-etape-icon.purple {
          background: #f3e8ff;
          color: #9333ea;
        }

        .admission-etape-icon.emerald {
          background: #d1fae5;
          color: #059669;
        }

        .admission-etape-number {
          width: 32px;
          height: 32px;
          background: #1f2937;
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 12px;
          font-size: 0.875rem;
          font-weight: bold;
        }

        .admission-etape-card h3 {
          font-weight: 600;
          color: #1f2937;
          margin-bottom: 8px;
        }

        .admission-etape-card p {
          color: #6b7280;
          font-size: 0.875rem;
          margin: 0;
        }

        .admission-etape-details {
          margin-top: 16px;
          padding-top: 16px;
          border-top: 1px solid #e5e7eb;
          font-size: 0.875rem;
          color: #374151;
          text-align: left;
        }

        .admission-document-item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px;
          background: #f9fafb;
          border-radius: 8px;
          border: 1px solid #e5e7eb;
          transition: all 0.2s ease;
        }

        .admission-document-item:hover {
          background: #f3f4f6;
          border-color: #d1d5db;
        }

        .admission-document-item .admission-icon {
          color: #16a34a;
          flex-shrink: 0;
        }

        .admission-document-item span {
          color: #374151;
        }

        .admission-alert {
          margin-top: 24px;
          padding: 16px;
          border-radius: 8px;
          border-left: 4px solid #f59e0b;
          background: #fffbeb;
          border: 1px solid #fde68a;
        }

        .admission-alert p {
          color: #92400e;
          font-weight: 500;
          margin: 0;
        }

        .admission-critere-card {
          padding: 24px;
          background: linear-gradient(135deg, #dbeafe 0%, #f3e8ff 100%);
          border-radius: 8px;
          border: 1px solid #c7d2fe;
          transition: all 0.2s ease;
        }

        .admission-critere-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }

        .admission-critere-card h3 {
          font-weight: 600;
          color: #1f2937;
          margin-bottom: 8px;
        }

        .admission-critere-card p {
          color: #6b7280;
          font-size: 0.875rem;
          margin: 0;
        }

        .admission-prix-card {
          text-align: center;
          padding: 24px;
          border-radius: 8px;
          border: 1px solid;
          transition: all 0.2s ease;
        }

        .admission-prix-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }

        .admission-prix-card.blue {
          background: #dbeafe;
          border-color: #93c5fd;
        }

        .admission-prix-card.green {
          background: #dcfce7;
          border-color: #86efac;
        }

        .admission-prix-card.purple {
          background: #f3e8ff;
          border-color: #c4b5fd;
        }

        .admission-prix-card h3 {
          font-weight: 600;
          margin-bottom: 8px;
        }

        .admission-prix-card.blue h3 {
          color: #1e40af;
        }

        .admission-prix-card.green h3 {
          color: #15803d;
        }

        .admission-prix-card.purple h3 {
          color: #7c2d12;
        }

        .admission-prix-amount {
          font-size: 2rem;
          font-weight: bold;
          margin-bottom: 4px;
        }

        .admission-prix-card.blue .admission-prix-amount {
          color: #2563eb;
        }

        .admission-prix-card.green .admission-prix-amount {
          color: #16a34a;
        }

        .admission-prix-card.purple .admission-prix-amount {
          color: #9333ea;
        }

        .admission-prix-card .admission-prix-note {
          font-size: 0.875rem;
          color: #6b7280;
          margin: 0;
        }

        .admission-success-alert {
          margin-top: 24px;
          padding: 16px;
          border-radius: 8px;
          border-left: 4px solid #16a34a;
          background: #dcfce7;
          border: 1px solid #86efac;
        }

        .admission-success-alert p {
          color: #15803d;
          font-weight: 500;
          margin: 0;
        }

        .admission-contact-section {
          background: linear-gradient(135deg, #2563eb 0%, #7c3aed 100%);
          color: white;
          border-radius: 12px;
          padding: 32px;
          text-align: center;
          border: 1px solid #1d4ed8;
        }

        .admission-contact-section h2 {
          font-size: 2rem;
          font-weight: bold;
          margin-bottom: 16px;
          color: white;
        }

        .admission-contact-section h2::after {
          background: white;
        }

        .admission-contact-section > p {
          font-size: 1.125rem;
          margin-bottom: 24px;
          opacity: 0.9;
        }

        .admission-contact-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          max-width: 768px;
          margin: 0 auto;
        }

        @media (max-width: 768px) {
          .admission-contact-grid {
            grid-template-columns: 1fr;
          }
        }

        .admission-contact-item {
          background: rgba(255, 255, 255, 0.1);
          padding: 20px;
          border-radius: 8px;
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .admission-contact-item h3 {
          font-weight: 600;
          margin-bottom: 8px;
        }

        .admission-contact-item p {
          opacity: 0.9;
          margin: 0;
        }

        .admission-etapes-section {
          margin-bottom: 64px;
        }

        .admission-etapes-section h2 {
          font-size: 2rem;
          font-weight: bold;
          color: #1f2937;
          margin-bottom: 32px;
          text-align: center;
        }

        .admission-download-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #2563eb;
          color: white;
          padding: 12px 24px;
          border-radius: 8px;
          text-decoration: none;
          font-weight: 500;
          transition: all 0.2s ease;
          border: none;
          cursor: pointer;
        }

        .admission-download-btn:hover {
          background: #1d4ed8;
          transform: translateY(-1px);
          box-shadow: 0 4px 8px rgba(37, 99, 235, 0.3);
        }

        .admission-niveau-card {
          background: white;
          border-radius: 8px;
          padding: 24px;
          border: 1px solid #e5e7eb;
          transition: all 0.2s ease;
        }

        .admission-niveau-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }

        .admission-niveau-card h3 {
          font-weight: 600;
          color: #1f2937;
          margin-bottom: 8px;
        }

        .admission-niveau-card .prix {
          font-size: 1.5rem;
          font-weight: bold;
          color: #2563eb;
          margin-bottom: 4px;
        }

        .admission-niveau-card .description {
          color: #6b7280;
          font-size: 0.875rem;
          margin: 0;
        }

        .admission-stats {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          margin-bottom: 48px;
        }

        @media (max-width: 768px) {
          .admission-stats {
            grid-template-columns: 1fr;
          }
        }

        .admission-stat-card {
          background: white;
          border-radius: 8px;
          padding: 24px;
          text-align: center;
          border: 1px solid #e5e7eb;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
        }

        .admission-stat-number {
          font-size: 2.5rem;
          font-weight: bold;
          color: #2563eb;
          margin-bottom: 8px;
        }

        .admission-stat-label {
          color: #6b7280;
          font-size: 0.875rem;
          margin: 0;
        }
      `}</style>

      {/* Header */}
      <div className="admission-header">
        <div className="admission-header-content">
          <h1>Procédure d'Admission</h1>
          <p>
            Rejoignez notre établissement d'excellence et donnez une nouvelle
            dimension à votre parcours éducatif
          </p>
        </div>
      </div>

      {/* Statistiques */}
      <div className="admission-main-content">
        <div className="admission-stats">
          <div className="admission-stat-card">
            <div className="admission-stat-number">97%</div>
            <p className="admission-stat-label">Taux de réussite</p>
          </div>
          <div className="admission-stat-card">
            <div className="admission-stat-number">700+</div>
            <p className="admission-stat-label">Élèves inscrits</p>
          </div>
          <div className="admission-stat-card">
            <div className="admission-stat-number">9</div>
            <p className="admission-stat-label">Années d'expérience</p>
          </div>
        </div>

        {/* Informations Générales */}
        <div className="admission-section">
          <h2>Informations Générales</h2>
          <div className="admission-grid admission-grid-2">
            <div>
              <div className="admission-info-item">
                <Calendar className="admission-icon admission-icon-blue" />
                <div>
                  <h3>Période d'Inscription</h3>
                  <p>Du 1er Septembre au 30 Octobre de chaque année</p>
                </div>
              </div>
              <div className="admission-info-item">
                <Clock className="admission-icon admission-icon-blue" />
                <div>
                  <h3>Délai de Traitement</h3>
                  <p>Réponse sous 5 jours ouvrables</p>
                </div>
              </div>
              <div className="admission-info-item">
                <Download className="admission-icon admission-icon-blue" />
                <div>
                  <a
                    className="admission-download-btn"
                    href="/dossier-candidature.pdf"
                    target="_blank"
                    download
                  >
                    <Download size={16} />
                    Télécharger le dossier
                  </a>
                </div>
              </div>
            </div>
            <div className="admission-info-box">
              <h3>À Savoir</h3>
              <p>
                Les inscriptions sont ouvertes pour tous les niveaux scolaires.
                Un accompagnement personnalisé est proposé pour faciliter votre
                intégration dans notre établissement. Des bourses d'études sont
                disponibles pour les familles éligibles.
              </p>
            </div>
          </div>
        </div>

        {/* Étapes du Processus */}
        <div className="admission-etapes-section">
          <h2>Étapes du Processus d'Admission</h2>
          <div className="admission-grid admission-grid-4">
            {etapes.map((etape) => (
              <div
                key={etape.numero}
                className={`admission-etape-card ${
                  activeStep === etape.numero ? "active" : ""
                }`}
                onClick={() =>
                  setActiveStep(
                    activeStep === etape.numero ? null : etape.numero
                  )
                }
              >
                <div className={`admission-etape-icon ${etape.couleur}`}>
                  {etape.icone}
                </div>
                <div className="admission-etape-number">{etape.numero}</div>
                <h3>{etape.titre}</h3>
                <p>{etape.description}</p>
                {activeStep === etape.numero && (
                  <div className="admission-etape-details">{etape.details}</div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Documents Requis */}
        <div className="admission-section">
          <h2>Documents Requis</h2>
          <div className="admission-grid admission-grid-2">
            {documents.map((document, index) => (
              <div key={index} className="admission-document-item">
                <CheckCircle className="admission-icon" />
                <span>{document}</span>
              </div>
            ))}
          </div>
          <div className="admission-alert">
            <p>
              Important : Tous les documents doivent être fournis en original et
              en copie. Les copies seront conservées par l'établissement.
            </p>
          </div>
        </div>

        {/* Critères d'Admission */}
        <div className="admission-section">
          <h2>Critères d'Évaluation</h2>
          <div className="admission-grid admission-grid-2">
            {criteres.map((critere, index) => (
              <div key={index} className="admission-critere-card">
                <h3>{critere.titre}</h3>
                <p>{critere.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Frais de Scolarité */}
        <div className="admission-section">
          <h2>Frais de Scolarité</h2>
          <div className="admission-grid admission-grid-3">
            <div className="admission-prix-card blue">
              <h3>Frais d'Inscription</h3>
              <p className="admission-prix-amount">500 DH</p>
              <p className="admission-prix-note">Non remboursables</p>
            </div>
            <div className="admission-prix-card green">
              <h3>Caution</h3>
              <p className="admission-prix-amount">1000 DH</p>
              <p className="admission-prix-note">Remboursable</p>
            </div>
            <div className="admission-prix-card purple">
              <h3>Assurance</h3>
              <p className="admission-prix-amount">200 DH</p>
              <p className="admission-prix-note">Annuelle</p>
            </div>
          </div>

          <h3
            style={{
              marginTop: "32px",
              marginBottom: "16px",
              color: "#1f2937",
            }}
          >
            Frais de Scolarité par Niveau
          </h3>
          <div className="admission-grid admission-grid-3">
            {niveaux.map((niveau, index) => (
              <div key={index} className="admission-niveau-card">
                <h3>{niveau.niveau}</h3>
                <div className="prix">{niveau.prix}</div>
                <p className="description">{niveau.description}</p>
              </div>
            ))}
          </div>

          <h3
            style={{
              marginTop: "32px",
              marginBottom: "16px",
              color: "#1f2937",
            }}
          >
            Services Optionnels
          </h3>
          <div className="admission-grid admission-grid-3">
            {services.map((service, index) => (
              <div key={index} className="admission-niveau-card">
                <h3>{service.service}</h3>
                <div className="prix">{service.prix}</div>
                <p className="description">{service.description}</p>
              </div>
            ))}
          </div>

          <div className="admission-success-alert">
            <p>
              Facilités de paiement disponibles : règlement en 3 fois sans frais
              pour les frais de scolarité. Bourses d'études accordées selon les
              critères sociaux.
            </p>
          </div>
        </div>

        {/* Contact */}
        <div className="admission-contact-section">
          <h2>Contactez-nous</h2>
          <p>
            Notre équipe est à votre disposition pour vous accompagner dans
            votre démarche d'admission
          </p>
          <div className="admission-contact-grid">
            <div className="admission-contact-item">
              <Phone className="admission-icon" />
              <h3>Téléphone</h3>
              <p>+212 661603173</p>
            </div>
            <div className="admission-contact-item">
              <Mail className="admission-icon" />
              <h3>Email</h3>
              <p>La.perle.des.sciences@gmail.com</p>
            </div>
            <div className="admission-contact-item">
              <MapPin className="admission-icon" />
              <h3>Adresse</h3>
              <p>741 تجزئة جوهرة,النرجس,حي الرياض- فاس</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProcedureAdmission;
