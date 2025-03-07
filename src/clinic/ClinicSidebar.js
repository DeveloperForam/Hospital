import React from "react";
import { NavLink } from "react-router-dom";
import { FaCalendarAlt, FaUserMd, FaUsers, FaList, FaUser, FaSignOutAlt, FaHome } from "react-icons/fa";
import "./clinicDashboard.css";
import Logout from  "./Logout";
const ClinicSidebar = () => {
    return (
        <div className="sidebar">
            <h2 className="sidebar-title">Clinic Panel</h2>
            <ul>
                <li>
                    <NavLink to="/clinic/dashboard" className={({ isActive }) => (isActive ? "active" : "")}>
                        <FaHome /> Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/clinic/manage-schedule" className={({ isActive }) => (isActive ? "active" : "")}>
                        <FaCalendarAlt /> Manage Schedule
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/clinic/manage-appointments" className={({ isActive }) => (isActive ? "active" : "")}>
                        <FaList /> Manage Appointments
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/clinic/manage-patients" className={({ isActive }) => (isActive ? "active" : "")}>
                        <FaUsers /> Manage Patients
                    </NavLink>
                </li>
            </ul>

            {/* Sidebar Footer */}
            <div className="sidebar-footer">
                <NavLink to="/clinic/profile" className={({ isActive }) => (isActive ? "active" : "")}>
                    <FaUser /> My Profile
                </NavLink>
                <NavLink to="/clinic/logout" className={({ isActive }) => (isActive ? "active" : "")}>
                    <FaSignOutAlt /> Logout
                </NavLink>
                <Logout />
            </div>
        </div>
    );
};

export default ClinicSidebar;
