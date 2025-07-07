import React, { useState } from 'react';
import Maternelle from '../assets/maternelle.jpg';
import Lycee from '../assets/lycee.jpg';

const Pedagogie = () => {
  const [selectedLevel, setSelectedLevel] = useState(null);

  const levels = [
    {
      id: 'maternelle',
      title: 'Maternelle',
      description: 'Un environnement chaleureux et sécurisé pour les premiers apprentissages de votre enfant. Développement de la motricité, de la créativité et des compétences sociales.',
      detailedDescription: 'La maternelle constitue le premier cycle de l\'école primaire. Elle accueille les enfants de 3 à 6 ans répartis en trois sections : petite section (PS), moyenne section (MS) et grande section (GS). L\'objectif principal est de permettre à chaque enfant de développer ses capacités et de s\'épanouir dans un environnement bienveillant. Les apprentissages se font à travers le jeu, l\'exploration et la manipulation. Les enfants découvrent les lettres, les chiffres, développent leur motricité fine et globale, apprennent à vivre ensemble et à respecter les règles de vie collective.',
      image: Maternelle,
      ageRange: '3-6 ans',
      features: ['Éveil artistique', 'Jeux éducatifs', 'Socialisation', 'Psychomotricité']
    },
    {
      id: 'elementaire',
      title: 'Élémentaire',
      description: 'Acquisition des fondamentaux : lecture, écriture, calcul. Un accompagnement personnalisé pour construire des bases solides et développer l\'autonomie.',
      detailedDescription: 'L\'école élémentaire accueille les enfants de 6 à 11 ans, du CP au CM2. C\'est là que se construisent les apprentissages fondamentaux : lire, écrire, compter et respecter autrui. Les programmes sont organisés en domaines d\'enseignement : français, mathématiques, histoire-géographie, sciences, éducation artistique et culturelle, éducation physique et sportive, enseignement moral et civique. L\'accent est mis sur la maîtrise de la langue française et des premiers éléments de mathématiques. Les élèves apprennent également une langue vivante étrangère.',
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=500&h=300&fit=crop',
      ageRange: '6-11 ans',
      features: ['Français & Mathématiques', 'Sciences & Découverte', 'Langues vivantes', 'Sport & Arts']
    },
    {
      id: 'college',
      title: 'Collège',
      description: 'Approfondissement des connaissances et développement de l\'esprit critique. Préparation active à l\'orientation et aux enjeux du lycée.',
      detailedDescription: 'Le collège marque l\'entrée des élèves dans l\'enseignement secondaire. Il est organisé en quatre niveaux de la sixième à la troisième et structuré en cycles pédagogiques. Les élèves suivent des enseignements communs, peuvent choisir des enseignements optionnels et bénéficient d\'un accompagnement personnalisé. Le collège permet l\'acquisition du socle commun de connaissances, de compétences et de culture. Il prépare les élèves aux voies de formation : voie générale, voie technologique, voie professionnelle.',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&h=300&fit=crop',
      ageRange: '11-15 ans',
      features: ['Disciplines variées', 'Projets pédagogiques', 'Orientation active', 'Vie associative']
    },
    {
      id: 'lycee',
      title: 'Lycée',
      description: 'Excellence académique et préparation aux études supérieures. Accompagnement vers la réussite du baccalauréat et la construction du projet d\'avenir.',
      detailedDescription: 'Le lycée général et technologique comprend trois classes : seconde, première et terminale. La classe de seconde est commune aux élèves se destinant aux voies générale et technologique. À l\'issue de la seconde, les élèves choisissent trois spécialités en première puis en conservent deux en terminale. Cette organisation permet une spécialisation progressive des études. Le lycée prépare au baccalauréat général ou technologique qui ouvre la voie vers l\'enseignement supérieur : université, classes préparatoires, BTS, DUT.',
      image: Lycee,
      ageRange: '15-18 ans',
      features: ['Filières générales', 'Spécialités', 'Prépa Supérieur', 'Baccalauréat']
    }
  ];

  const handleReadMore = (level) => {
    setSelectedLevel(selectedLevel?.id === level.id ? null : level);
  };

  const closeDescription = () => {
    setSelectedLevel(null);
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h2 style={styles.title}>Nos Niveaux Scolaires</h2>
        <p style={styles.subtitle}>
          Un parcours éducatif complet de la maternelle au lycée, 
          adapté à chaque étape du développement de l'enfant
        </p>
      </div>
      
      <div style={styles.levelsGrid}>
        {levels.map((level, index) => {
          const isEven = index % 2 === 0;
          return (
            <div key={level.id} style={{...styles.levelCard, ...(isEven ? {} : styles.levelCardReverse)}}>
              <div style={styles.levelCardContent}>
                <div style={styles.imageContainer}>
                  <img src={level.image} alt={level.title} style={styles.image} />
                  <div style={styles.ageBadge}>
                    {level.ageRange}
                  </div>
                </div>
                
                <div style={styles.infoContainer}>
                  <h3 style={styles.levelTitle}>{level.title}</h3>
                  <p style={styles.levelDescription}>{level.description}</p>
                  
                  <ul style={styles.featuresList}>
                    {level.features.map((feature, idx) => (
                      <li key={idx} style={styles.featureItem}>
                        <span style={styles.featureIcon}>✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <button 
                    style={styles.readMoreBtn}
                    onClick={() => handleReadMore(level)}
                  >
                    {selectedLevel?.id === level.id ? 'Masquer' : 'En savoir plus'}
                  </button>
                </div>
              </div>
              
              {selectedLevel?.id === level.id && (
                <div style={styles.detailsContainer}>
                  <div style={styles.detailsContent}>
                    <div style={styles.detailsHeader}>
                      <h4 style={styles.detailsTitle}>Détails sur {level.title}</h4>
                      <button style={styles.closeBtn} onClick={closeDescription}>✕</button>
                    </div>
                    <p style={styles.detailedDescription}>{level.detailedDescription}</p>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '100px 120px',
    background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
    minHeight: '100vh',
    maxWidth: '1200px',
    margin: '0 auto'
  },
  header: {
    textAlign: 'center',
    marginBottom: '80px'
  },
  title: {
    fontSize: '2.5rem',
    fontWeight: '700',
    color: '#1e293b',
    marginBottom: '16px',
    position: 'relative',
    display: 'inline-block'
  },
  subtitle: {
    fontSize: '1.1rem',
    color: '#64748b',
    maxWidth: '600px',
    margin: '0 auto',
    lineHeight: '1.6'
  },
  levelsGrid: {
    display: 'flex',
    flexDirection: 'column',
    gap: '80px'
  },
  levelCard: {
    background: 'white',
    borderRadius: '20px',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.08)',
    overflow: 'hidden',
    transition: 'all 0.3s ease'
  },
  levelCardReverse: {
    direction: 'rtl'
  },
  levelCardContent: {
    display: 'flex',
    alignItems: 'center',
    minHeight: '400px',
    padding:'40px'
  },
  imageContainer: {
    flex: '1',
    position: 'relative',
    height: '400px',
    overflow: 'hidden'
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'transform 0.3s ease'
  },
  ageBadge: {
    position: 'absolute',
    top: '10px',
    right: '10px',
    background: 'linear-gradient(135deg, #3b82f6, #06b6d4)',
    color: 'white',
    padding: '8px 16px',
    borderRadius: '20px',
    fontWeight: '600',
    fontSize: '0.9rem',
    boxShadow: '0 4px 12px rgba(59, 130, 246, 0.3)'
  },
  infoContainer: {
    flex: '1',
    padding: '40px',
    direction: 'ltr'
  },
  levelTitle: {
    fontSize: '2rem',
    fontWeight: '700',
    color: '#1e293b',
    marginBottom: '16px'
  },
  levelDescription: {
    fontSize: '1rem',
    color: '#64748b',
    lineHeight: '1.7',
    marginBottom: '24px'
  },
  featuresList: {
    listStyle: 'none',
    padding: '0',
    margin: '0 0 30px 0'
  },
  featureItem: {
    display: 'flex',
    alignItems: 'center',
    padding: '8px 0',
    color: '#475569',
    fontWeight: '500'
  },
  featureIcon: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '20px',
    height: '20px',
    background: 'linear-gradient(135deg, #10b981, #059669)',
    color: 'white',
    borderRadius: '50%',
    fontSize: '12px',
    fontWeight: 'bold',
    marginRight: '12px',
    flexShrink: '0'
  },
  readMoreBtn: {
    background: 'linear-gradient(135deg, #3b82f6, #06b6d4)',
    color: 'white',
    border: 'none',
    padding: '12px 28px',
    borderRadius: '25px',
    fontWeight: '600',
    fontSize: '1rem',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    boxShadow: '0 4px 12px rgba(59, 130, 246, 0.3)'
  },
  detailsContainer: {
    background: '#f8fafc',
    borderTop: '1px solid #e2e8f0',
    animation: 'fadeIn 0.3s ease-out'
  },
  detailsContent: {
    padding: '30px 40px'
  },
  detailsHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '20px'
  },
  detailsTitle: {
    fontSize: '1.3rem',
    fontWeight: '600',
    color: '#1e293b',
    margin: '0'
  },
  closeBtn: {
    background: 'none',
    border: 'none',
    fontSize: '1.2rem',
    cursor: 'pointer',
    color: '#64748b',
    padding: '5px',
    borderRadius: '50%',
    transition: 'all 0.2s ease'
  },
  detailedDescription: {
    fontSize: '1rem',
    color: '#475569',
    lineHeight: '1.7',
    margin: '0',
    textAlign: 'justify'
  }
};

export default Pedagogie;