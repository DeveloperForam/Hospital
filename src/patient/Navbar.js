import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FaUserCircle, FaSignOutAlt, FaHome, FaUserMd,
  FaCalendarCheck, FaInfoCircle, FaPhoneAlt, FaHospital, FaComments
} from "react-icons/fa";
import "../styles/navbar.css";
import hospitalLogo from "../assets/hospital_logo.png";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      {/* Logo Section */}
      <div className="logo-container">
        <img src={hospitalLogo} alt="Hospital Logo" className="hospital-logo" />
        <span className="logo-text">Clinic Care</span>
      </div>

      {/* Navigation Links */}
      <ul className="nav-links">
        <li><Link to="/patient/home"><FaHome /> Home</Link></li>
        <li><Link to="/patient/clinics"><FaHospital /> Clinics</Link></li>
        <li><Link to="/patient/view-appointment"><FaCalendarCheck /> Appointments</Link></li>
        <li><Link to="/patient/chatbot"><FaComments /> Chatbot</Link></li>
        <li><Link to="/patient/about"><FaInfoCircle /> About</Link></li>
        <li><Link to="/patient/contact"><FaPhoneAlt /> Contact</Link></li>
      </ul>

      {/* Profile & Logout Buttons */}
      <div className="nav-icons">
        <button className="dashboard-btn" onClick={() => navigate("/patient/profile")}>
          <FaUserCircle /> Profile
        </button>
        <button className="dashboard-btn" onClick={() => navigate("/patient/logout")}>
          <FaSignOutAlt /> Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
