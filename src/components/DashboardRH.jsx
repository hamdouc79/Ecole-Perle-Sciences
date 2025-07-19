import React, { useState, useEffect } from "react";
import {
  Users,
  FileText,
  Clock,
  CheckCircle,
  XCircle,
  AlertCircle,
  Search,
  Filter,
  Download,
  Eye,
  Edit,
  Trash2,
  Calendar,
  Mail,
  Phone,
  User,
  Briefcase,
  MessageSquare,
  TrendingUp,
  PieChart,
  BarChart3,
} from "lucide-react";
import apiService from "../service/api";
import "../styles/DashboardRH.css";

const DashboardRH = () => {
  const [candidatures, setCandidatures] = useState([]);
  const [stats, setStats] = useState({});
  const [loading, setLoading] = useState(true);
  const [selectedCandidature, setSelectedCandidature] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [showStatsModal, setShowStatsModal] = useState(false);
  const [filters, setFilters] = useState({
    search: "",
    statut: "",
    poste: "",
    dateFrom: "",
    dateTo: "",
  });
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [notification, setNotification] = useState(null);

  // Fonction pour afficher les notifications
  const showNotification = (message, type = "success") => {
    setNotification({ message, type });
    setTimeout(() => setNotification(null), 3000);
  };

  useEffect(() => {
    fetchCandidatures();
    fetchStats();
  }, [currentPage, filters]);

  const fetchCandidatures = async () => {
    try {
      setLoading(true);
      const params = new URLSearchParams({
        page: currentPage,
        limit: 10,
        ...filters,
      });

      const response = await apiService.getJobApplications(params);
      setCandidatures(response.data);
      setTotalPages(response.pagination.pages);
    } catch (error) {
      console.error("Erreur lors de la récupération des candidatures:", error);
    } finally {
      setLoading(false);
    }
  };

  const fetchStats = async () => {
    try {
      const response = await apiService.getJobStats();
      setStats(response.data);
    } catch (error) {
      console.error("Erreur lors de la récupération des statistiques:", error);
    }
  };

  const handleStatusChange = async (id, newStatus, commentaire = "") => {
    try {
      await apiService.updateJobApplicationStatus(id, newStatus, commentaire);

      // Messages de notification selon le statut
      const statusMessages = {
        soumise: "Candidature remise en attente",
        en_cours: "Candidature mise en cours d'examen",
        acceptee: "Candidature acceptée avec succès",
        refusee: "Candidature refusée",
      };

      showNotification(statusMessages[newStatus] || "Statut mis à jour");

      fetchCandidatures();
      fetchStats();
      setShowModal(false);
      setSelectedCandidature(null);
    } catch (error) {
      console.error("Erreur lors de la mise à jour du statut:", error);
      showNotification("Erreur lors de la mise à jour du statut", "error");
    }
  };

  const handleDelete = async (id) => {
    if (
      window.confirm("Êtes-vous sûr de vouloir supprimer cette candidature ?")
    ) {
      try {
        await apiService.deleteJobApplication(id);
        showNotification("Candidature supprimée avec succès");
        fetchCandidatures();
        fetchStats();
      } catch (error) {
        console.error("Erreur lors de la suppression:", error);
        showNotification("Erreur lors de la suppression", "error");
      }
    }
  };

  const getStatusColor = (statut) => {
    switch (statut) {
      case "soumise":
        return "#f39c12";
      case "en_cours":
        return "#3498db";
      case "acceptee":
        return "#27ae60";
      case "refusee":
        return "#e74c3c";
      default:
        return "#95a5a6";
    }
  };

  const getStatusText = (statut) => {
    switch (statut) {
      case "soumise":
        return "Soumise";
      case "en_cours":
        return "En cours";
      case "acceptee":
        return "Acceptée";
      case "refusee":
        return "Refusée";
      default:
        return "Inconnu";
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("fr-FR", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const StatCard = ({ title, value, icon: Icon, color, percentage }) => (
    <div className="stat-card">
      <div className="stat-header">
        <div className="stat-icon" style={{ backgroundColor: color }}>
          <Icon className="icon" />
        </div>
        <div className="stat-info">
          <h3 className="stat-title">{title}</h3>
          <p className="stat-value">{value}</p>
          {percentage && (
            <span className="stat-percentage" style={{ color: color }}>
              {percentage > 0 ? "+" : ""}
              {percentage}%
            </span>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <div className="dashboard-rh">
      {/* Notification */}
      {notification && (
        <div className={`notification ${notification.type}`}>
          <div className="notification-content">
            {notification.type === "success" ? (
              <CheckCircle className="notification-icon" />
            ) : (
              <AlertCircle className="notification-icon" />
            )}
            <span>{notification.message}</span>
          </div>
        </div>
      )}

      {/* Header */}
      <div className="dashboard-header">
        <div className="header-content">
          <h1 className="dashboard-title">
            <Users className="title-icon" />
            Tableau de Bord RH
          </h1>
          <div className="header-actions">
            <button
              className="btn-stats"
              onClick={() => setShowStatsModal(true)}
            >
              <BarChart3 className="btn-icon" />
              Statistiques
            </button>
            <button className="btn-export">
              <Download className="btn-icon" />
              Exporter
            </button>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="stats-grid">
        <StatCard
          title="Total Candidatures"
          value={stats.total || 0}
          icon={FileText}
          color="#3498db"
          percentage={12}
        />
        <StatCard
          title="En Attente"
          value={stats.byStatus?.soumise || 0}
          icon={Clock}
          color="#f39c12"
          percentage={-5}
        />
        <StatCard
          title="Acceptées"
          value={stats.byStatus?.acceptee || 0}
          icon={CheckCircle}
          color="#27ae60"
          percentage={25}
        />
        <StatCard
          title="Ce Mois"
          value={stats.thisMonth || 0}
          icon={TrendingUp}
          color="#9b59b6"
          percentage={8}
        />
      </div>

      {/* Filters */}
      <div className="filters-section">
        <div className="filters-container">
          <div className="search-box">
            <Search className="search-icon" />
            <input
              type="text"
              placeholder="Rechercher par nom, email..."
              value={filters.search}
              onChange={(e) =>
                setFilters({ ...filters, search: e.target.value })
              }
              className="search-input"
            />
          </div>

          <select
            value={filters.statut}
            onChange={(e) => setFilters({ ...filters, statut: e.target.value })}
            className="filter-select"
          >
            <option value="">Tous les statuts</option>
            <option value="soumise">Soumises</option>
            <option value="en_cours">En cours</option>
            <option value="acceptee">Acceptées</option>
            <option value="refusee">Refusées</option>
          </select>

          <select
            value={filters.poste}
            onChange={(e) => setFilters({ ...filters, poste: e.target.value })}
            className="filter-select"
          >
            <option value="">Tous les postes</option>
            <option value="enseignant-primaire">Enseignant Primaire</option>
            <option value="professeur-maths">Professeur Maths</option>
            <option value="surveillant">Surveillant</option>
            <option value="autre">Autre</option>
          </select>

          <button className="filter-btn">
            <Filter className="filter-icon" />
            Filtrer
          </button>
        </div>
      </div>

      {/* Candidatures Table */}
      <div className="candidatures-section">
        <div className="section-header">
          <h2 className="section-title">Candidatures Récentes</h2>
        </div>

        {loading ? (
          <div className="loading-container">
            <div className="spinner"></div>
            <p>Chargement des candidatures...</p>
          </div>
        ) : (
          <div className="candidatures-table">
            <div className="table-header">
              <div className="table-row">
                <div className="table-cell">Candidat</div>
                <div className="table-cell">Poste</div>
                <div className="table-cell">Date</div>
                <div className="table-cell">Statut</div>
                <div className="table-cell">Actions</div>
              </div>
            </div>

            <div className="table-body">
              {candidatures.map((candidature) => (
                <div key={candidature._id} className="table-row">
                  <div className="table-cell">
                    <div className="candidat-info">
                      <div className="candidat-avatar">
                        <User className="avatar-icon" />
                      </div>
                      <div className="candidat-details">
                        <p className="candidat-nom">
                          {candidature.prenom} {candidature.nom}
                        </p>
                        <p className="candidat-email">{candidature.email}</p>
                      </div>
                    </div>
                  </div>

                  <div className="table-cell">
                    <div className="poste-info">
                      <Briefcase className="poste-icon" />
                      <span className="poste-nom">
                        {candidature.posteSouhaite}
                      </span>
                    </div>
                  </div>

                  <div className="table-cell">
                    <div className="date-info">
                      <Calendar className="date-icon" />
                      <span>{formatDate(candidature.dateCandidature)}</span>
                    </div>
                  </div>

                  <div className="table-cell">
                    <span
                      className="status-badge"
                      style={{
                        backgroundColor: getStatusColor(candidature.statut),
                        color: "white",
                      }}
                    >
                      {getStatusText(candidature.statut)}
                    </span>
                  </div>

                  <div className="table-cell">
                    <div className="actions-buttons">
                      <button
                        className="action-btn view-btn"
                        onClick={() => {
                          setSelectedCandidature(candidature);
                          setShowModal(true);
                        }}
                        title="Voir les détails"
                      >
                        <Eye className="action-icon" />
                      </button>

                      <button
                        className="action-btn edit-btn"
                        onClick={() => {
                          setSelectedCandidature(candidature);
                          setShowModal(true);
                        }}
                        title="Modifier le statut"
                      >
                        <Edit className="action-icon" />
                      </button>

                      <button
                        className="action-btn delete-btn"
                        onClick={() => handleDelete(candidature._id)}
                        title="Supprimer la candidature"
                      >
                        <Trash2 className="action-icon" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Pagination */}
        <div className="pagination">
          <button
            className="pagination-btn"
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
          >
            Précédent
          </button>

          <span className="pagination-info">
            Page {currentPage} sur {totalPages}
          </span>

          <button
            className="pagination-btn"
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages}
          >
            Suivant
          </button>
        </div>
      </div>

      {/* Modal de détails */}
      {showModal && selectedCandidature && (
        <CandidatureModal
          candidature={selectedCandidature}
          onClose={() => {
            setShowModal(false);
            setSelectedCandidature(null);
          }}
          onStatusChange={handleStatusChange}
        />
      )}

      {/* Modal des statistiques */}
      {showStatsModal && (
        <StatsModal stats={stats} onClose={() => setShowStatsModal(false)} />
      )}
    </div>
  );
};

// Composant Modal pour les détails de candidature
const CandidatureModal = ({ candidature, onClose, onStatusChange }) => {
  const [newStatus, setNewStatus] = useState(candidature.statut);
  const [commentaire, setCommentaire] = useState(
    candidature.commentaireRH || ""
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    onStatusChange(candidature._id, newStatus, commentaire);
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-header">
          <h3 className="modal-title">Détails de la candidature</h3>
          <button className="modal-close" onClick={onClose}>
            <XCircle className="close-icon" />
          </button>
        </div>

        <div className="modal-body">
          <div className="candidat-details-full">
            <div className="detail-section">
              <h4>Informations personnelles</h4>
              <div className="detail-grid">
                <div className="detail-item">
                  <User className="detail-icon" />
                  <span>
                    {candidature.prenom} {candidature.nom}
                  </span>
                </div>
                <div className="detail-item">
                  <Mail className="detail-icon" />
                  <span>{candidature.email}</span>
                </div>
                <div className="detail-item">
                  <Phone className="detail-icon" />
                  <span>{candidature.telephone || "Non renseigné"}</span>
                </div>
                <div className="detail-item">
                  <Briefcase className="detail-icon" />
                  <span>{candidature.posteSouhaite}</span>
                </div>
              </div>
            </div>

            <div className="detail-section">
              <h4>Message de motivation</h4>
              <div className="motivation-message">
                <MessageSquare className="message-icon" />
                <p>{candidature.messageMotivation || "Aucun message fourni"}</p>
              </div>
            </div>

            <div className="detail-section">
              <h4>CV</h4>
              {candidature.cvPath ? (
                <div className="cv-section">
                  <FileText className="cv-icon" />
                  <a
                    href={`http://localhost:5000/${candidature.cvPath}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Télécharger le CV
                  </a>
                </div>
              ) : (
                <p>Aucun CV téléchargé</p>
              )}
            </div>

            <form onSubmit={handleSubmit} className="status-form">
              <div className="form-group">
                <label>Statut</label>
                <select
                  value={newStatus}
                  onChange={(e) => setNewStatus(e.target.value)}
                  className="status-select"
                >
                  <option value="soumise">Soumise</option>
                  <option value="en_cours">En cours</option>
                  <option value="acceptee">Acceptée</option>
                  <option value="refusee">Refusée</option>
                </select>
              </div>

              <div className="form-group">
                <label>Commentaire RH</label>
                <textarea
                  value={commentaire}
                  onChange={(e) => setCommentaire(e.target.value)}
                  className="commentaire-textarea"
                  placeholder="Ajoutez un commentaire..."
                />
              </div>

              <div className="form-actions">
                <button type="button" className="btn-cancel" onClick={onClose}>
                  Annuler
                </button>
                <button type="submit" className="btn-save">
                  Enregistrer les modifications
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

// Composant Modal pour les statistiques
const StatsModal = ({ stats, onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content stats-modal">
        <div className="modal-header">
          <h3 className="modal-title">
            <PieChart className="modal-icon" />
            Statistiques Détaillées
          </h3>
          <button className="modal-close" onClick={onClose}>
            <XCircle className="close-icon" />
          </button>
        </div>

        <div className="modal-body">
          <div className="stats-grid-modal">
            <div className="stat-card-modal">
              <h4>Candidatures par statut</h4>
              <div className="stat-bars">
                <div className="stat-bar">
                  <span>Soumises</span>
                  <div className="bar-container">
                    <div
                      className="bar"
                      style={{ width: "70%", backgroundColor: "#f39c12" }}
                    ></div>
                    <span>{stats.byStatus?.soumise || 0}</span>
                  </div>
                </div>
                <div className="stat-bar">
                  <span>En cours</span>
                  <div className="bar-container">
                    <div
                      className="bar"
                      style={{ width: "50%", backgroundColor: "#3498db" }}
                    ></div>
                    <span>{stats.byStatus?.en_cours || 0}</span>
                  </div>
                </div>
                <div className="stat-bar">
                  <span>Acceptées</span>
                  <div className="bar-container">
                    <div
                      className="bar"
                      style={{ width: "30%", backgroundColor: "#27ae60" }}
                    ></div>
                    <span>{stats.byStatus?.acceptee || 0}</span>
                  </div>
                </div>
                <div className="stat-bar">
                  <span>Refusées</span>
                  <div className="bar-container">
                    <div
                      className="bar"
                      style={{ width: "20%", backgroundColor: "#e74c3c" }}
                    ></div>
                    <span>{stats.byStatus?.refusee || 0}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardRH;
