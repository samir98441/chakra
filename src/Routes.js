import React from "react";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Outlet,
} from "react-router-dom";
import About from "./pages/aboutus/About";
import Contact from "./pages/contactus/Contact";
import User from "./pages/user/User";
import Home from "./pages/Home/Home";
import Cart from "./pages/cart/Cart";
import Login from "./pages/login/Login";
import { useLoginContext } from "./context/LoginContext";
import { ProtectedRoute } from "./components/protectedRoutes";

const Routess = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path="/home"
            element={
              <ProtectedRoute>
                <Header />
                <Home />
                <Footer />
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
    </div>
  );
};

export default Routess;
