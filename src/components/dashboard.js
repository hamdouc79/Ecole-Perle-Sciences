import React, { useState, useEffect } from 'react';
import StudentsList from './StudentsList';
import StudentDetails from './StudentDetails';
import Statistics from './Statistics';
import './dashboard.css';
import apiService from '../service/api';

const Dashboard = () => {
  const [students, setStudents] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [activeTab, setActiveTab] = useState('pending');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [statistics, setStatistics] = useState({
    total: 0,
    pending: 0,
    accepted: 0,
    rejected: 0
  });

  // Filtres et pagination
  const [filters, setFilters] = useState({
    niveau: '',
    classe: '',
    statut: 'en_attente'
  });
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  // Charger les étudiants
  const loadStudents = async (page = 1) => {
    try {
      setLoading(true);
      const response = await apiService.getStudents({ 
        page, 
        limit: 10, 
        ...filters 
      });
      setStudents(response.data);
      setCurrentPage(response.pagination.page);
      setTotalPages(response.pagination.pages);
    } catch (err) {
      setError('Erreur lors du chargement des étudiants');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  // Charger les statistiques
  const loadStatistics = async () => {
    try {
      const [total, pending, accepted, rejected] = await Promise.all([
        apiService.getStudents({ limit: 1000 }),
        apiService.getStudents({ statut: 'en_attente', limit: 1000 }),
        apiService.getStudents({ statut: 'accepte', limit: 1000 }),
        apiService.getStudents({ statut: 'refuse', limit: 1000 })
      ]);

      setStatistics({
        total: total.pagination.total,
        pending: pending.pagination.total,
        accepted: accepted.pagination.total,
        rejected: rejected.pagination.total
      });
    } catch (err) {
      console.error('Erreur lors du chargement des statistiques:', err);
    }
  };

  // Mettre à jour le statut d'un étudiant
  const updateStudentStatus = async (studentId, newStatus) => {
    try {
      await apiService.updateStudentStatus(studentId, newStatus);
      // Recharger les données
      await loadStudents(currentPage);
      await loadStatistics();
      setSelectedStudent(null);
    } catch (err) {
      setError('Erreur lors de la mise à jour du statut');
      console.error(err);
    }
  };

  // Supprimer un étudiant
  const deleteStudent = async (studentId) => {
    if (window.confirm('Êtes-vous sûr de vouloir supprimer cet étudiant ?')) {
      try {
        await apiService.deleteStudent(studentId);
        await loadStudents(currentPage);
        await loadStatistics();
        setSelectedStudent(null);
      } catch (err) {
        setError('Erreur lors de la suppression');
        console.error(err);
      }
    }
  };

  // Changer d'onglet
  const handleTabChange = (tab) => {
    setActiveTab(tab);
    const statusMap = {
      'pending': 'en_attente',
      'accepted': 'accepte',
      'rejected': 'refuse',
      'all': ''
    };
    setFilters(prev => ({ ...prev, statut: statusMap[tab] }));
    setCurrentPage(1);
  };

  // Changer les filtres
  const handleFilterChange = (newFilters) => {
    setFilters(prev => ({ ...prev, ...newFilters }));
    setCurrentPage(1);
  };

  // Effets
  useEffect(() => {
    loadStudents(currentPage);
  }, [filters, currentPage]);

  useEffect(() => {
    loadStatistics();
  }, []);

  return (
    <div className="dashboard">
      {/* Header */}
      <header className="dashboard-header">
        <div className="header-content">
          <h1 className="dashboard-title">Dashboard École</h1>
          <div className="header-actions">
            <button 
              className="refresh-btn"
              onClick={() => {
                loadStudents(currentPage);
                loadStatistics();
              }}
            >
              🔄 Actualiser
            </button>
          </div>
        </div>
      </header>

      {/* Statistiques */}
      <Statistics statistics={statistics} />

      {/* Messages d'erreur */}
      {error && (
        <div className="error-banner">
          <span>{error}</span>
          <button onClick={() => setError(null)}>×</button>
        </div>
      )}

      {/* Contenu principal */}
      <div className="dashboard-content">
        {/* Sidebar avec la liste des étudiants */}
        <div className="sidebar">
          <div className="sidebar-header">
            <div className="tabs">
              <button 
                className={`tab ${activeTab === 'pending' ? 'active' : ''}`}
                onClick={() => handleTabChange('pending')}
              >
                En Attente ({statistics.pending})
              </button>
              <button 
                className={`tab ${activeTab === 'accepted' ? 'active' : ''}`}
                onClick={() => handleTabChange('accepted')}
              >
                Acceptés ({statistics.accepted})
              </button>
              <button 
                className={`tab ${activeTab === 'rejected' ? 'active' : ''}`}
                onClick={() => handleTabChange('rejected')}
              >
                Refusés ({statistics.rejected})
              </button>
              <button 
                className={`tab ${activeTab === 'all' ? 'active' : ''}`}
                onClick={() => handleTabChange('all')}
              >
                Tous ({statistics.total})
              </button>
            </div>
          </div>

          <StudentsList
            students={students}
            loading={loading}
            selectedStudent={selectedStudent}
            onSelectStudent={setSelectedStudent}
            filters={filters}
            onFilterChange={handleFilterChange}
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        </div>

        {/* Détails de l'étudiant */}
        <div className="main-content">
          {selectedStudent ? (
            <StudentDetails
              student={selectedStudent}
              onUpdateStatus={updateStudentStatus}
              onDelete={deleteStudent}
              onClose={() => setSelectedStudent(null)}
            />
          ) : (
            <div className="no-selection">
              <div className="no-selection-content">
                <div className="no-selection-icon">👥</div>
                <h3>Aucun étudiant sélectionné</h3>
                <p>Sélectionnez un étudiant dans la liste pour voir ses détails</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;