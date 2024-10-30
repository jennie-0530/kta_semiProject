import { Navigate } from "react-router-dom";
import Cookies from "js-cookie";

const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const userId = Cookies.get("user_id");
  return userId ? children : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
