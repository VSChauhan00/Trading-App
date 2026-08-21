// Centralized API configuration
// REACT_APP_BACKEND_URL lets you override the full URL (e.g. for production).
// Falls back to localhost:3002 for local development.
const API_PORT = process.env.REACT_APP_BACKEND_PORT || 3002;
export const API_BASE_URL = process.env.REACT_APP_BACKEND_URL || `http://localhost:${API_PORT}`;

// Frontend landing-page URL (used for redirect on auth failure / logout)
export const FRONTEND_URL = process.env.REACT_APP_FRONTEND_URL || "http://localhost:3000";
