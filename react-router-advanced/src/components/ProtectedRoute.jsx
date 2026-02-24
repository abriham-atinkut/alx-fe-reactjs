import isAuth from "./auth";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  if (isAuth()) {
    return <Navigate to="/login" replace />;
  }
  return children;
};
export default ProtectedRoute;
