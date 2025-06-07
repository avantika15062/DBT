// Components/AdminRoute.jsx
import { Navigate } from "react-router-dom";

const AdminRoute = ({ children, user }) => {
  if (!user || user.email !== "durgesh@tripifive.com") return <Navigate to="/login" />;
  return children;
};

export default AdminRoute;
