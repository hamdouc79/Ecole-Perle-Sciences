import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const isAdmin = sessionStorage.getItem("isAdmin") === "true";
  return isAdmin ? children : <Navigate to="/" replace />;
};

export default ProtectedRoute;
