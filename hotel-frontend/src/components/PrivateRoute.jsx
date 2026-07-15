import { Navigate } from "react-router-dom";
import { authService } from "../services/authService";

// Usage: <Route element={<PrivateRoute role="ADMIN" />}> ... nested routes ... </Route>
function PrivateRoute({ role, children }) {
  const isAuth = authService.isAuthenticated();
  const currentRole = authService.getCurrentRole();

  if (!isAuth) {
    return <Navigate to="/" />;
  }

  if (role && currentRole !== role) {
    return <Navigate to="/" replace />;
  }

  return children;
}

export default PrivateRoute;