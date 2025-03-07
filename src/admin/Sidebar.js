import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FaTachometerAlt, FaClinicMedical, FaUserMd, FaUsers, FaUserCircle, FaSignOutAlt } from "react-icons/fa"; 
import "../styles/sidebar.css";
import Logout from "./Logout";


const Sidebar = () => {
  const navigate = useNavigate(); // ✅ Use the useNavigate hook inside the component

  return (
    <nav className="sidebar">
      {/* Sidebar Title */}
      <h2 className="sidebar-title">Admin Panel</h2>

      <ul>
        <li>
          <NavLink to="/admin/dashboard" className={({ isActive }) => (isActive ? "active" : "")}>
            <FaTachometerAlt /> Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink to="/admin/manage-clinics" className={({ isActive }) => (isActive ? "active" : "")}>
            <FaClinicMedical /> Manage Clinics
          </NavLink>
        </li>
        <li>
          <NavLink to="/admin/manage-doctors" className={({ isActive }) => (isActive ? "active" : "")}>
            <FaUserMd /> Manage Doctors
          </NavLink>
        </li>
        <li>
          <NavLink to="/admin/manage-patients" className={({ isActive }) => (isActive ? "active" : "")}>
            <FaUsers /> Manage Patients
          </NavLink>
        </li>
        <li>
          {/* Profile & Logout Buttons */}
          <div className="nav-icons">
            <button className="dashboard-btn" onClick={() => navigate("profile")}>
                      <FaUserCircle /> Profile
                    </button>
                    {/* <Logout /> */}
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
