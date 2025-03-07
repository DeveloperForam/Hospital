import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/auth.css";

const Logout = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("user"); // Remove user data
    navigate("/login"); // Redirect to login
  };

  return (
    <button className="btn logout-btn" onClick={handleLogout}>
      Logout
    </button>
  );
};

export default Logout;
