// services/api.js
const API_BASE_URL =
  process.env.REACT_APP_API_URL || "http://localhost:5000/api";

class ApiService {
  // Méthode générique pour les requêtes
  async request(endpoint, options = {}) {
    const url = `${API_BASE_URL}${endpoint}`;

    const config = {
      headers: {
        "Content-Type": "application/json",
        ...options.headers,
      },
      ...options,
    };

    try {
      const response = await fetch(url, config);
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Erreur de requête");
      }

      return data;
    } catch (error) {
      console.error("Erreur API:", error);
      throw error;
    }
  }

  // Services pour les étudiants
  async createStudent(studentData) {
    return this.request("/students", {
      method: "POST",
      body: JSON.stringify(studentData),
    });
  }

  async getStudents(params = {}) {
    const queryString = new URLSearchParams(params).toString();
    return this.request(`/students?${queryString}`);
  }

  async getStudent(id) {
    return this.request(`/students/${id}`);
  }

  async updateStudentStatus(id, status) {
    return this.request(`/students/${id}/status`, {
      method: "PUT",
      body: JSON.stringify({ statut: status }),
    });
  }

  async deleteStudent(id) {
    return this.request(`/students/${id}`, {
      method: "DELETE",
    });
  }

  // ✅ Mettre à jour le statut d'un étudiant AVEC commentaire (optionnel)
  async UpdateStudentStatus(id, status, commentaire = "") {
    return this.request(`/students/${id}/status`, {
      method: "PUT",
      body: JSON.stringify({
        statut: status,
        commentaireRH: commentaire,
      }),
    });
  }

  // 📊 Récupérer des statistiques sur les étudiants (ex : total, par niveau, etc.)
  async getStudentStats() {
    return this.request("/students/stats/overview");
  }

  // 📤 Exporter la liste des étudiants (optionnel)
  async exportStudents(format = "csv") {
    return this.request(`/students/export?format=${format}`);
  }

  // Services pour les candidatures
  async createJobApplication(formData) {
    // Pour FormData, ne pas définir Content-Type
    return this.request("/jobs", {
      method: "POST",
      headers: {}, // Pas de Content-Type pour FormData
      body: formData,
    });
  }

  async getJobApplications(params = {}) {
    const queryString = new URLSearchParams(params).toString();
    return this.request(`/jobs?${queryString}`);
  }

  async getJobApplication(id) {
    return this.request(`/jobs/${id}`);
  }

  async updateJobApplicationStatus(id, status, commentaire = "") {
    return this.request(`/jobs/${id}/status`, {
      method: "PUT",
      body: JSON.stringify({
        statut: status,
        commentaireRH: commentaire,
      }),
    });
  }

  async deleteJobApplication(id) {
    return this.request(`/jobs/${id}`, {
      method: "DELETE",
    });
  }

  async getJobStats() {
    return this.request("/jobs/stats/overview");
  }
}

// Créer une instance singleton
const apiService = new ApiService();

export default apiService;
