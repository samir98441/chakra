import { Navigate } from "react-router-dom";
import { useLoginContext } from "../context/LoginContext";

export const ProtectedRoute = ({ children }) => {
  const { isLoggedIn } = useLoginContext();
  console.log("isloggedIn", isLoggedIn);
  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }
  return children;
};
