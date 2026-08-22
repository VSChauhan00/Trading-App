import { createContext, useState, useEffect } from "react";
import { API_BASE_URL, FRONTEND_URL } from "./config";

const AuthContext = createContext({
  isAuthenticated: false,
  isLoading: true,
  username: "",
  logout: () => {},
});

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [username, setUsername] = useState("");

  // On mount, verify the session with the backend.
  // The backend reads the JWT from the `token` cookie (sent via credentials:include).
  useEffect(() => {
    const checkAuth = async () => {
      try {
        // Read token from localStorage (set by frontend after login).
        // Sent via Authorization header so auth works even when browsers
        // block third-party cookies on cross-origin requests.
        const token = localStorage.getItem("token");
        const res = await fetch(`${API_BASE_URL}/verify`, {
          credentials: "include",
          headers: token ? { Authorization: `Bearer ${token}` } : {},
        });

        if (res.ok) {
          const data = await res.json();
          setIsAuthenticated(data.authenticated);
          setUsername(data.username || "");
        } else {
          setIsAuthenticated(false);
        }
      } catch (err) {
        console.error("Auth check failed:", err);
        setIsAuthenticated(false);
      } finally {
        setIsLoading(false);
      }
    };

    checkAuth();
  }, []);

  const logout = async () => {
    const token = localStorage.getItem("token");
    try {
      await fetch(`${API_BASE_URL}/logout`, {
        credentials: "include",
        method: "POST",
        headers: token ? { Authorization: `Bearer ${token}` } : {},
      });
    } catch (err) {
      console.error("Logout request failed:", err);
    } finally {
      // Clear token from localStorage.
      localStorage.removeItem("token");
      // Navigate to the frontend home route immediately.
      // NOTE: We intentionally do NOT call setIsAuthenticated(false) here.
      // Doing so would trigger a ProtectedRoute re-render that races with
      // this redirect and overwrites window.location.href with /login.
      // Since we are navigating to a different origin (the frontend), the
      // dashboard React tree is unloaded and the context state is irrelevant.
      window.location.href = FRONTEND_URL;
    }
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, isLoading, username, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
