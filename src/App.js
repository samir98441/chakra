import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Main from "./components/main/Main";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Outlet,
} from "react-router-dom";
import About from "./components/header/About";
import Contact from "./components/header/Contact";
import User from "./components/header/User";
import Home from "./components/Home";
import Cart from "./components/header/Cart";
import Login from "./components/login/Login";
import { useLoginContext } from "./context/LoginContext";
import { ProtectedRoute } from "./components/protectedRoutes";

function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path="/home"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route
            path="/cart"
            element={
              <ProtectedRoute>
                <Header />
                <Cart />
                <Footer />
              </ProtectedRoute>
            }
          />
          <Route
            path="/about"
            element={
              <ProtectedRoute>
                <Header />
                <About />
                <Footer />
              </ProtectedRoute>
            }
          />
          <Route
            path="/contact"
            element={
              <ProtectedRoute>
                <Header />
                <Contact />
                <Footer />
              </ProtectedRoute>
            }
          />
          <Route
            path="/user"
            element={
              <ProtectedRoute>
                <Header />
                <User />
                <Footer />
              </ProtectedRoute>
            }
          />
          <Route index element={<Login />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
