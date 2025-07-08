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
      description: 'Une nouvelle étape se prépare ! Dès la rentrée 2026, notre établissement étendra son offre éducative au lycée pour accompagner vos enfants jusqu\'au baccalauréat.',
      detailedDescription: 'Notre projet d\'ouverture du lycée pour septembre 2026 s\'inscrit dans une vision d\'excellence éducative. Nous préparons actuellement un curriculum innovant qui alliera les exigences académiques traditionnelles aux compétences du 21e siècle. Le lycée proposera les filières générales avec un choix de spécialités diversifiées, des classes préparatoires aux grandes écoles, et un accompagnement personnalisé pour l\'orientation post-bac. Nous investissons dans des infrastructures modernes : laboratoires scientifiques high-tech, espaces collaboratifs, bibliothèque numérique et équipements sportifs de pointe. L\'objectif est d\'offrir un environnement d\'apprentissage stimulant qui prépare nos élèves aux défis de l\'enseignement supérieur et du monde professionnel.',
      image: Lycee,
      ageRange: 'Bientôt 15-18 ans',
      features: ['Ouverture 2026', 'Filières d\'excellence', 'Infrastructures modernes', 'Projet ambitieux'],
      isComingSoon: true
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
      {/* Header moderne avec effet glassmorphism */}
      <div style={styles.header}>
        <div style={styles.headerBackground}></div>
        <div style={styles.headerContent}>
          <div style={styles.headerBadge}>
            <span style={styles.badgeIcon}>🎓</span>
            Excellence Éducative
          </div>
          <h1 style={styles.title}>
            Nos Niveaux 
            <span style={styles.titleGradient}> Scolaires</span>
          </h1>
          <p style={styles.subtitle}>
            Un parcours éducatif d'exception de la maternelle au lycée, 
            <br />
            <span style={styles.subtitleHighlight}>
              façonné pour révéler le potentiel de chaque enfant
            </span>
          </p>
          <div style={styles.decorativeElements}>
            <div style={styles.floatingElement1}></div>
            <div style={styles.floatingElement2}></div>
            <div style={styles.floatingElement3}></div>
          </div>
        </div>
      </div>
      
      <div style={styles.levelsGrid}>
        {levels.map((level, index) => {
          const isEven = index % 2 === 0;
          const isComingSoon = level.isComingSoon;
          
          return (
            <div 
              key={level.id} 
              style={{
                ...styles.levelCard, 
                ...(isEven ? {} : styles.levelCardReverse),
                ...(isComingSoon ? styles.comingSoonCard : {})
              }}
            >
              <div style={styles.levelCardContent}>
                <div style={styles.imageContainer}>
                  <img src={level.image} alt={level.title} style={styles.image} />
                  <div style={{
                    ...styles.ageBadge,
                    ...(isComingSoon ? styles.comingSoonBadge : {})
                  }}>
                    {level.ageRange}
                  </div>
                  {isComingSoon && (
                    <div style={styles.comingSoonOverlay}>
                      <div style={styles.comingSoonText}>
                        <span style={styles.comingSoonIcon}>🚀</span>
                        Bientôt disponible
                      </div>
                    </div>
                  )}
                </div>
                
                <div style={styles.infoContainer}>
                  <h3 style={styles.levelTitle}>
                    {level.title}
                    {isComingSoon && <span style={styles.newLabel}>Nouveau</span>}
                  </h3>
                  <p style={styles.levelDescription}>{level.description}</p>
                  
                  <div style={styles.featuresContainer}>
                    {level.features.map((feature, idx) => (
                      <div key={idx} style={styles.featureTag}>
                        <span style={styles.featureIcon}>
                          {isComingSoon ? '⭐' : '✓'}
                        </span>
                        {feature}
                      </div>
                    ))}
                  </div>
                  
                  <button 
                    style={{
                      ...styles.readMoreBtn,
                      ...(isComingSoon ? styles.comingSoonBtn : {})
                    }}
                    onClick={() => handleReadMore(level)}
                  >
                    {selectedLevel?.id === level.id ? 'Masquer' : 'Découvrir'}
                    <span style={styles.btnArrow}>→</span>
                  </button>
                </div>
              </div>
              
              {selectedLevel?.id === level.id && (
                <div style={styles.detailsContainer}>
                  <div style={styles.detailsContent}>
                    <div style={styles.detailsHeader}>
                      <h4 style={styles.detailsTitle}>
                        {isComingSoon ? '🌟 Projet ' : 'À propos de '}
                        {level.title}
                      </h4>
                      <button style={styles.closeBtn} onClick={closeDescription}>
                        <span style={styles.closeBtnIcon}>✕</span>
                      </button>
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
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    minHeight: '100vh',
    position: 'relative',
    overflow: 'hidden'
  },
  
  // Header moderne
  header: {
    position: 'relative',
    height: '80vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    overflow: 'hidden'
  },
  headerBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.1) 0%, transparent 70%)',
    backdropFilter: 'blur(10px)',
    zIndex: 1
  },
  headerContent: {
    position: 'relative',
    zIndex: 2,
    maxWidth: '800px',
    padding: '0 40px'
  },
  headerBadge: {
    display: 'inline-flex',
    alignItems: 'center',
    background: 'rgba(255, 255, 255, 0.15)',
    backdropFilter: 'blur(20px)',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    borderRadius: '50px',
    padding: '12px 24px',
    marginBottom: '40px',
    color: 'white',
    fontWeight: '600',
    fontSize: '0.9rem',
    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)'
  },
  badgeIcon: {
    marginRight: '8px',
    fontSize: '1.1rem'
  },
  title: {
    fontSize: 'clamp(2.5rem, 5vw, 4rem)',
    fontWeight: '800',
    color: 'white',
    marginBottom: '24px',
    letterSpacing: '-0.02em',
    textShadow: '0 4px 20px rgba(0, 0, 0, 0.2)'
  },
  titleGradient: {
    background: 'linear-gradient(45deg, #FFE066, #FF6B6B)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text'
  },
  subtitle: {
    fontSize: '1.2rem',
    color: 'rgba(255, 255, 255, 0.9)',
    lineHeight: '1.6',
    maxWidth: '600px',
    margin: '0 auto',
    textShadow: '0 2px 10px rgba(0, 0, 0, 0.1)'
  },
  subtitleHighlight: {
    color: '#FFE066',
    fontWeight: '600'
  },
  decorativeElements: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    pointerEvents: 'none'
  },
  floatingElement1: {
    position: 'absolute',
    top: '20%',
    left: '10%',
    width: '60px',
    height: '60px',
    background: 'rgba(255, 255, 255, 0.1)',
    borderRadius: '50%',
    animation: 'float 6s ease-in-out infinite'
  },
  floatingElement2: {
    position: 'absolute',
    top: '60%',
    right: '15%',
    width: '40px',
    height: '40px',
    background: 'rgba(255, 224, 102, 0.2)',
    borderRadius: '50%',
    animation: 'float 8s ease-in-out infinite reverse'
  },
  floatingElement3: {
    position: 'absolute',
    bottom: '20%',
    left: '20%',
    width: '80px',
    height: '80px',
    background: 'rgba(255, 107, 107, 0.1)',
    borderRadius: '50%',
    animation: 'float 7s ease-in-out infinite'
  },
  
  // Grille des niveaux
  levelsGrid: {
    background: 'white',
    borderRadius: '40px 40px 0 0',
    padding: '100px 60px',
    margin: '0 auto',
    maxWidth: '1200px',
    display: 'flex',
    flexDirection: 'column',
    gap: '80px',
    position: 'relative',
    zIndex: 2,
    marginTop: '-40px'
  },
  levelCard: {
    background: 'white',
    borderRadius: '24px',
    boxShadow: '0 20px 60px rgba(0, 0, 0, 0.05)',
    overflow: 'hidden',
    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
    border: '1px solid rgba(0, 0, 0, 0.05)',
    '&:hover': {
      transform: 'translateY(-8px)',
      boxShadow: '0 30px 80px rgba(0, 0, 0, 0.1)'
    }
  },
  levelCardReverse: {
    direction: 'rtl'
  },
  levelCardContent: {
    display: 'flex',
    alignItems: 'center',
    minHeight: '500px'
  },
  imageContainer: {
    flex: '1',
    position: 'relative',
    height: '500px',
    overflow: 'hidden'
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'transform 0.6s ease'
  },
  ageBadge: {
    position: 'absolute',
    top: '20px',
    right: '20px',
    background: 'linear-gradient(135deg, #667eea, #764ba2)',
    color: 'white',
    padding: '12px 20px',
    borderRadius: '25px',
    fontWeight: '700',
    fontSize: '0.9rem',
    boxShadow: '0 8px 25px rgba(102, 126, 234, 0.3)',
    backdropFilter: 'blur(10px)'
  },
  infoContainer: {
    flex: '1',
    padding: '60px',
    direction: 'ltr'
  },
  levelTitle: {
    fontSize: '2.5rem',
    fontWeight: '800',
    color: '#1e293b',
    marginBottom: '20px',
    display: 'flex',
    alignItems: 'center',
    gap: '16px'
  },
  levelDescription: {
    fontSize: '1.1rem',
    color: '#64748b',
    lineHeight: '1.8',
    marginBottom: '32px'
  },
  featuresContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '12px',
    marginBottom: '40px'
  },
  featureTag: {
    display: 'flex',
    alignItems: 'center',
    background: 'linear-gradient(135deg, #f0f9ff, #e0f2fe)',
    padding: '10px 16px',
    borderRadius: '20px',
    color: '#0369a1',
    fontWeight: '600',
    fontSize: '0.9rem',
    border: '1px solid #bae6fd'
  },
  featureIcon: {
    marginRight: '8px',
    fontSize: '1rem'
  },
  readMoreBtn: {
    background: 'linear-gradient(135deg, #667eea, #764ba2)',
    color: 'white',
    border: 'none',
    padding: '16px 32px',
    borderRadius: '30px',
    fontWeight: '700',
    fontSize: '1rem',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    boxShadow: '0 10px 30px rgba(102, 126, 234, 0.3)',
    display: 'flex',
    alignItems: 'center',
    gap: '8px'
  },
  btnArrow: {
    transition: 'transform 0.3s ease'
  },
  
  // Styles spéciaux pour "Bientôt disponible"
  comingSoonCard: {
    background: 'linear-gradient(135deg, #f8fafc, #e2e8f0)',
    border: '2px solid #e2e8f0'
  },
  comingSoonBadge: {
    background: 'linear-gradient(135deg, #f59e0b, #d97706)',
    animation: 'pulse 2s infinite'
  },
  comingSoonOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'rgba(0, 0, 0, 0.7)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backdropFilter: 'blur(2px)'
  },
  comingSoonText: {
    color: 'white',
    fontSize: '1.2rem',
    fontWeight: '700',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '8px'
  },
  comingSoonIcon: {
    fontSize: '2rem'
  },
  comingSoonBtn: {
    background: 'linear-gradient(135deg, #f59e0b, #d97706)',
    boxShadow: '0 10px 30px rgba(245, 158, 11, 0.3)'
  },
  newLabel: {
    background: 'linear-gradient(135deg, #ff6b6b, #ee5a24)',
    color: 'white',
    padding: '4px 12px',
    borderRadius: '15px',
    fontSize: '0.8rem',
    fontWeight: '600',
    marginLeft: '16px'
  },
  
  // Détails
  detailsContainer: {
    background: 'linear-gradient(135deg, #f8fafc, #e2e8f0)',
    borderTop: '1px solid #e2e8f0',
    animation: 'slideDown 0.4s ease-out'
  },
  detailsContent: {
    padding: '40px 60px'
  },
  detailsHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '24px'
  },
  detailsTitle: {
    fontSize: '1.5rem',
    fontWeight: '700',
    color: '#1e293b',
    margin: '0'
  },
  closeBtn: {
    background: 'rgba(255, 255, 255, 0.8)',
    border: 'none',
    borderRadius: '50%',
    width: '40px',
    height: '40px',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backdropFilter: 'blur(10px)'
  },
  closeBtnIcon: {
    fontSize: '1.2rem',
    color: '#64748b'
  },
  detailedDescription: {
    fontSize: '1.1rem',
    color: '#475569',
    lineHeight: '1.8',
    margin: '0',
    textAlign: 'justify'
  }
};

export default Pedagogie;