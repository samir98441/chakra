import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { AboutUsPage } from "./pages";
import { ContactUsPage } from "./pages";
import { UserPage } from "./pages";
// import { HomePage } from "./pages";
// import { CartPage } from "./pages";
import { LoginPage } from "./pages";
import { ProtectedRoute } from "./components/protectedRoutes";
import { Spinner } from "@chakra-ui/react";
import loadable from "@loadable/component";

// const HomePage = loadable(() => import("./pages/home/HomePage"));

const HomePage = loadable(() => import("./pages/home/HomePage"), {
  resolveComponent: (components) => components.HomePage,
});

const CartPage = loadable(() => import("./pages/cart/CartPage"));

const MyRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <Suspense fallback={<Spinner />}>
                <HomePage />
              </Suspense>
            </ProtectedRoute>
          }
        />
        <Route
          path="/cart"
          element={
            <ProtectedRoute>
              <Suspense fallback={<Spinner />}>
                <CartPage />
              </Suspense>
            </ProtectedRoute>
          }
        />
        <Route
          path="/about"
          element={
            <ProtectedRoute>
              <AboutUsPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/contact"
          element={
            <ProtectedRoute>
              <ContactUsPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/user"
          element={
            <ProtectedRoute>
              <UserPage />
            </ProtectedRoute>
          }
        />
        <Route index element={<LoginPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </Router>
  );
};

export default MyRoutes;
