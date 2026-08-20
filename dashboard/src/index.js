import React, { useContext } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import Home from "./components/Home";
import { AuthProvider, default as AuthContext } from "./AuthContext";
import { FRONTEND_URL } from "./config";

/**
 * Gate the entire dashboard behind authentication.
 *
 * - While the token is being verified we show nothing (loading state).
 * - If the user has no valid session they are redirected to the landing-page login.
 * - If they are authenticated the real dashboard routes render.
 */
const ProtectedRoute = () => {
  const { isAuthenticated, isLoading } = useContext(AuthContext);

  if (isLoading) {
    return (
      <div style={{ padding: "4rem", textAlign: "center" }}>
        <p>Loading…</p>
      </div>
    );
  }

  if (!isAuthenticated) {
    // Redirect to the frontend login page (separate React app).
    window.location.href = `${FRONTEND_URL}/login`;
    return null;
  }

  return (
    <Routes>
      <Route path="/*" element={<Home />} />
    </Routes>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <ProtectedRoute />
      </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>
);
