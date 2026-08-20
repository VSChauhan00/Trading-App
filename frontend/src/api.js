// Centralized API configuration
// REACT_APP_API_URL allows overriding the full URL (e.g., for production)
// REACT_APP_API_PORT falls back to the backend port (default 3002)
const API_PORT = process.env.REACT_APP_API_PORT || 3002;
const API_BASE_URL = process.env.REACT_APP_API_URL || `http://localhost:${API_PORT}`;

// Helper to perform API requests
async function apiRequest(endpoint, options = {}) {
  const url = `${API_BASE_URL}${endpoint}`;
  const config = {
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
      ...options.headers,
    },
    ...options,
  };

  try {
    const response = await fetch(url, config);
    const data = await response.json().catch(() => null);

    if (!response.ok) {
      throw new Error(data?.message || "API request failed");
    }

    return data;
  } catch (error) {
    console.error(`API Error [${endpoint}]:`, error);
    throw error;
  }
}

// Auth API functions

export async function logout() {
  return apiRequest("/logout", {
    method: "POST",
  });
}

export async function verifyAuth() {
  return apiRequest("/verify", {
    method: "GET",
  });
}
export async function signup(userData) {
  return apiRequest("/signup", {
    method: "POST",
    body: JSON.stringify(userData),
  });
}

export async function login(credentials) {
  return apiRequest("/login", {
    method: "POST",
    body: JSON.stringify(credentials),
  });
}

export { API_BASE_URL };
