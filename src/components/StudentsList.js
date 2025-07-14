import React from 'react';

const StudentsList = ({ 
  students, 
  loading, 
  selectedStudent, 
  onSelectStudent, 
  filters, 
  onFilterChange,
  currentPage,
  totalPages,
  onPageChange
}) => {
  
  const getStatusBadge = (status) => {
    const statusConfig = {
      'en_attente': { class: 'status-pending', text: 'En Attente' },
      'accepte': { class: 'status-accepted', text: 'Accepté' },
      'refuse': { class: 'status-rejected', text: 'Refusé' }
    };
    
    const config = statusConfig[status] || { class: 'status-unknown', text: status };
    return <span className={`status-badge ${config.class}`}>{config.text}</span>;
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('fr-FR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    });
  };

  const handleFilterChange = (field, value) => {
    onFilterChange({ [field]: value });
  };

  return (
    <div className="students-list">
      {/* Filtres */}
      <div className="filters">
        <div className="filter-group">
          <label>Niveau</label>
          <select 
            value={filters.niveau} 
            onChange={(e) => handleFilterChange('niveau', e.target.value)}
          >
            <option value="">Tous les niveaux</option>
            <option value="maternelle">Maternelle</option>
            <option value="primaire">Primaire</option>
            <option value="college">Collège</option>
            <option value="lycee">Lycée</option>
          </select>
        </div>
        
        <div className="filter-group">
          <label>Classe</label>
          <select 
            value={filters.classe} 
            onChange={(e) => handleFilterChange('classe', e.target.value)}
          >
            <option value="">Toutes les classes</option>
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

      {/* Liste des étudiants */}
      <div className="students-container">
        {loading ? (
          <div className="loading">
            <div className="loading-spinner"></div>
            <p>Chargement des étudiants...</p>
          </div>
        ) : students.length === 0 ? (
          <div className="no-students">
            <div className="no-students-icon">📄</div>
            <h3>Aucun étudiant trouvé</h3>
            <p>Aucun étudiant ne correspond aux critères sélectionnés</p>
          </div>
        ) : (
          students.map((student) => (
            <div 
              key={student._id} 
              className={`student-card ${selectedStudent?._id === student._id ? 'selected' : ''}`}
              onClick={() => onSelectStudent(student)}
            >
              <div className="student-header">
                <div className="student-name">
                  <h4>{student.prenom} {student.nom}</h4>
                  <span className="student-class">{student.classe?.toUpperCase()}</span>
                </div>
                {getStatusBadge(student.statut)}
              </div>
              
              <div className="student-info">
                <div className="info-row">
                  <span className="info-label">📧</span>
                  <span className="info-value">{student.email}</span>
                </div>
                <div className="info-row">
                  <span className="info-label">📱</span>
                  <span className="info-value">{student.telephone}</span>
                </div>
                <div className="info-row">
                  <span className="info-label">🎓</span>
                  <span className="info-value">{student.niveau}</span>
                </div>
                <div className="info-row">
                  <span className="info-label">📅</span>
                  <span className="info-value">
                    {student.dateInscription ? formatDate(student.dateInscription) : 'N/A'}
                  </span>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="pagination">
          <button 
            className="pagination-btn"
            disabled={currentPage === 1}
            onClick={() => onPageChange(currentPage - 1)}
          >
            ← Précédent
          </button>
          
          <div className="pagination-info">
            <span>Page {currentPage} sur {totalPages}</span>
          </div>
          
          <button 
            className="pagination-btn"
            disabled={currentPage === totalPages}
            onClick={() => onPageChange(currentPage + 1)}
          >
            Suivant →
          </button>
        </div>
      )}
    </div>
  );
};

export default StudentsList;