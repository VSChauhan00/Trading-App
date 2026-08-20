import React, { useContext } from "react";
import AuthContext from "../AuthContext";

const LogoutButton = () => {
  const { logout } = useContext(AuthContext);

  return (
    <button
      className="logout-btn"
      onClick={logout}
      title="Logout"
    >
      Logout
    </button>
  );
};

export default LogoutButton;
