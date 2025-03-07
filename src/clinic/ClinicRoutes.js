import React, { useState, useEffect } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";

import ClinicDashboard from "./ClinicDashboard";
import ManageSchedule from "./ManageSchedule";
import ManageAppointments from "./ManageAppointments";
import ManagePatients from "./ManagePatients";
import Profile from "../pages/Profile";
import Logout from "./Logout";
import ClinicSidebar from "./ClinicSidebar";

const ClinicRoutes = () => {
 
  return (
    <div className="app-container">
      
      <div className="content">
        <Routes>
        
            <>
            <Route path="/" element={<ClinicSidebar />} /> 
              <Route path="dashboard" element={<ClinicDashboard />} />
              <Route path="manage-schedule" element={<ManageSchedule />} />
              <Route path="manage-appointments" element={<ManageAppointments />} />
              <Route path="manage-patients" element={<ManagePatients />} />
              <Route path="profile" element={<Profile />} />
              <Route path="logout" element={<Logout />} />
              <Route path="*" element={<Navigate to="/clinic/dashboard" replace />} />
            </>
          
        
        </Routes>
      </div>
    </div>
  );
};

export default ClinicRoutes;
  