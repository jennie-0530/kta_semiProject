import { Navigate } from "react-router-dom";
import Cookies from "js-cookie";

const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const accessToken = Cookies.get("accessToken");
  return accessToken ? children : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
