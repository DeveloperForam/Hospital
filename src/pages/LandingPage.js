import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/landing.css";

const LandingPage = () => {
  const navigate = useNavigate();
  const [fade, setFade] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setFade(true);
    }, 500); // Small delay for a smooth effect
  }, []);

  return (
    <div className={`landing-container ${fade ? "fade-in" : ""}`}>
      <h1>Welcome to Clinic Care</h1>
      <div className="role-selection">
      
        <button onClick={() => navigate("/admin/login")} className="role-btn">Admin</button>
        <button onClick={() => navigate("/clinic/login")} className="role-btn">Clinic</button>
        <button onClick={() => navigate("/patient/auth")} className="role-btn">Patient</button>
        
      </div>
    </div>
  );
};

export default LandingPage;
