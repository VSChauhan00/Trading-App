// Centralized API configuration - change REACT_APP_API_PORT env var to switch ports
const API_PORT = process.env.REACT_APP_API_PORT || 3002;
export const API_BASE_URL = `http://localhost:${API_PORT}`;
