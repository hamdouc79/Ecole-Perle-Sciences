const express = require("express");
const path = require("path");
require("dotenv").config();
const cors = require("cors");

const connectDB = require("./config/database");
const {
  logRequest,
  sanitizeInput,
  errorHandler,
} = require("./middleware/validation");

const app = express();

// Connexion à MongoDB
connectDB();
app.use("/uploads", express.static("uploads"));

// Middleware globaux
app.use(logRequest);
app.use(
  cors({
    origin: ["http://localhost:3000", "http://localhost:3003"],
    credentials: true,
  })
);
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true, limit: "10mb" }));
app.use(sanitizeInput);

// Servir les fichiers statiques (uploads)
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Routes
app.use("/api/students", require("./routes/students"));
app.use("/api/jobs", require("./routes/jobs"));

// Route de base
app.get("/", (req, res) => {
  res.json({ message: "API Backend fonctionnel !" });
});

// Gestion des erreurs (doit être après les routes)
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Serveur démarré sur le port ${PORT}`);
});
