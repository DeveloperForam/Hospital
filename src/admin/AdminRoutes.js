import React, { useState, useEffect } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import AdminLogin from "./AdminLogin";
import AdminDashboard from "./AdminDashboard";
import ManageClinics from "./ManageClinics";
import ManageDoctors from "./ManageDoctors";
import ManagePatients from "./ManagePatient";
import Logout from "./Logout";
import Profile from "../pages/Profile";
import Sidebar from "./Sidebar";

const AdminRoutes = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem("isAdminAuthenticated") == "true"
  );
  const location = useLocation();

  useEffect(() => {
    const handleAuthChange = () => {
      setIsAuthenticated(localStorage.getItem("isAdminAuthenticated") == "true");
    };

    window.addEventListener("storage", handleAuthChange);
    return () => {
      window.removeEventListener("storage", handleAuthChange);
    };
  }, []);

  useEffect(() => {
    setIsAuthenticated(localStorage.getItem("isAdminAuthenticated") == "true");
  }, [location.pathname]);

  const isLoginPage = location.pathname == "/admin/login";

  return (
    <div className="app-container">
      {isAuthenticated && !isLoginPage && <Sidebar />}
      <div className="content">
        <Routes>
          <Route path="login" element={<AdminLogin setIsAuthenticated={setIsAuthenticated} />} />
          {isAuthenticated ? (
            <>
              <Route path="dashboard" element={<AdminDashboard />} />
              <Route path="manage-clinics" element={<ManageClinics />} />
              <Route path="manage-doctors" element={<ManageDoctors />} />
              <Route path="manage-patients" element={<ManagePatients />} />
              <Route path="profile" element={<Profile />} />
              <Route path="logout" element={<Logout />} />
              <Route path="*" element={<Navigate to="/admin/dashboard" replace />} />
            </>
          ) : (
            <Route path="*" element={<Navigate to="/admin/login" replace />} />
          )}
        </Routes>
      </div>
    </div>
  );
};

export default AdminRoutes;
