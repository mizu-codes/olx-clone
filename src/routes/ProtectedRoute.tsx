import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { PageLoader } from "../components/Loading/LoadingSpinner";

function ProtectedRoute() {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <PageLoader label="Checking your session..." minHeight="min-h-screen" />
    );
  }

  if (!user) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
}

export default ProtectedRoute;
