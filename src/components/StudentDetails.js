import React, { useState } from 'react';

const StudentDetails = ({ student, onUpdateStatus, onDelete, onClose }) => {
  const [isUpdating, setIsUpdating] = useState(false);

  const formatDate = (dateString) => {
    if (!dateString) return 'N/A';
    return new Date(dateString).toLocaleDateString('fr-FR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    });
  };

  const calculateAge = (birthDate) => {
    if (!birthDate) return 'N/A';
    const today = new Date();
    const birth = new Date(birthDate);
    const age = today.getFullYear() - birth.getFullYear();
    const monthDiff = today.getMonth() - birth.getMonth();
    
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
      return age - 1;
    }
    return age;
  };

  const handleStatusUpdate = async (newStatus) => {
    setIsUpdating(true);
    try {
      await onUpdateStatus(student._id, newStatus);
    } finally {
      setIsUpdating(false);
    }
  };

  const getStatusConfig = (status) => {
    const configs = {
      'en_attente': { 
        class: 'status-pending', 
        text: 'En Attente', 
        icon: '⏳',
        actions: [
          { status: 'accepte', text: 'Accepter', class: 'accept-btn', icon: '✅' },
          { status: 'refuse', text: 'Refuser', class: 'reject-btn', icon: '❌' }
        ]
      },
      'accepte': { 
        class: 'status-accepted', 
        text: 'Accepté', 
        icon: '✅',
        actions: [
          { status: 'en_attente', text: 'Remettre en attente', class: 'pending-btn', icon: '⏳' },
          { status: 'refuse', text: 'Refuser', class: 'reject-btn', icon: '❌' }
        ]
      },
      'refuse': { 
        class: 'status-rejected', 
        text: 'Refusé', 
        icon: '❌',
        actions: [
          { status: 'en_attente', text: 'Remettre en attente', class: 'pending-btn', icon: '⏳' },
          { status: 'accepte', text: 'Accepter', class: 'accept-btn', icon: '✅' }
        ]
      }
    };
    
    return configs[status] || { class: 'status-unknown', text: status, icon: '❓', actions: [] };
  };

  const statusConfig = getStatusConfig(student.statut);

  return (
    <div className="student-details">
      {/* Header */}
      <div className="details-header">
        <div className="header-left">
          <h2>{student.prenom} {student.nom}</h2>
          <div className="current-status">
            <span className={`status-badge ${statusConfig.class}`}>
              {statusConfig.icon} {statusConfig.text}
            </span>
          </div>
        </div>
        <button className="close-btn" onClick={onClose}>×</button>
      </div>

      {/* Actions */}
      <div className="details-actions">
        <div className="status-actions">
          {statusConfig.actions.map((action) => (
            <button
              key={action.status}
              className={`action-btn ${action.class}`}
              onClick={() => handleStatusUpdate(action.status)}
              disabled={isUpdating}
            >
              {action.icon} {action.text}
            </button>
          ))}
        </div>
        
        <button 
          className="delete-btn"
          onClick={() => onDelete(student._id)}
          disabled={isUpdating}
        >
          🗑️ Supprimer
        </button>
      </div>

      {/* Informations détaillées */}
      <div className="details-content">
        {/* Informations personnelles */}
        <div className="info-section">
          <h3 className="section-title">
            <span className="section-icon">👤</span>
            Informations Personnelles
          </h3>
          <div className="info-grid">
            <div className="info-item">
              <label>Prénom</label>
              <span>{student.prenom}</span>
            </div>
            <div className="info-item">
              <label>Nom</label>
              <span>{student.nom}</span>
            </div>
            <div className="info-item">
              <label>Email</label>
              <span>{student.email}</span>
            </div>
            <div className="info-item">
              <label>Téléphone</label>
              <span>{student.telephone}</span>
            </div>
            <div className="info-item">
              <label>Date de naissance</label>
              <span>{formatDate(student.dateNaissance)}</span>
            </div>
            <div className="info-item">
              <label>Âge</label>
              <span>{calculateAge(student.dateNaissance)} ans</span>
            </div>
            <div className="info-item">
              <label>Genre</label>
              <span>{student.genre === 'masculin' ? 'Masculin' : 'Féminin'}</span>
            </div>
          </div>
        </div>

        {/* Informations scolaires */}
        <div className="info-section">
          <h3 className="section-title">
            <span className="section-icon">🎓</span>
            Informations Scolaires
          </h3>
          <div className="info-grid">
            <div className="info-item">
              <label>Niveau</label>
              <span className="capitalize">{student.niveau}</span>
            </div>
            <div className="info-item">
              <label>Classe souhaitée</label>
              <span className="uppercase">{student.classe}</span>
            </div>
            <div className="info-item">
              <label>Date d'inscription</label>
              <span>{formatDate(student.dateInscription)}</span>
            </div>
          </div>
        </div>

        {/* Adresse */}
        <div className="info-section">
          <h3 className="section-title">
            <span className="section-icon">🏠</span>
            Adresse
          </h3>
          <div className="info-grid">
            <div className="info-item full-width">
              <label>Adresse complète</label>
              <span>{student.adresse}</span>
            </div>
            <div className="info-item">
              <label>Ville</label>
              <span>{student.ville}</span>
            </div>
            <div className="info-item">
              <label>Code postal</label>
              <span>{student.codePostal}</span>
            </div>
          </div>
        </div>

        {/* Informations parent/tuteur */}
        <div className="info-section">
          <h3 className="section-title">
            <span className="section-icon">👨‍👩‍👧‍👦</span>
            Parent/Tuteur
          </h3>
          <div className="info-grid">
            <div className="info-item">
              <label>Nom du parent</label>
              <span>{student.nomParent}</span>
            </div>
            <div className="info-item">
              <label>Téléphone parent</label>
              <span>{student.telephoneParent}</span>
            </div>
            {student.emailParent && (
              <div className="info-item">
                <label>Email parent</label>
                <span>{student.emailParent}</span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Loading overlay */}
      {isUpdating && (
        <div className="loading-overlay">
          <div className="loading-spinner"></div>
          <p>Mise à jour en cours...</p>
        </div>
      )}
    </div>
  );
};

export default StudentDetails;