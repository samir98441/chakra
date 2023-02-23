import { Navigate } from "react-router-dom";
import { useLoginContext } from "../context/LoginContext";
import Footer from "./footer/Footer";
import Header from "./header/Header";

export const ProtectedRoute = ({ children }) => {
  const { isLoggedIn } = useLoginContext();
  console.log("isloggedIn", isLoggedIn);
  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};
