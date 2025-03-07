import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
// import DoctorDetails from "./DoctorDetails";
// import BookAppointment from "./BookAppointment";
import DoctorContact from "./DoctorContact";
import Clinic from "./Clinic";
import DoctorDetails from "./DoctorDetails";
import About from "./About";
import Logout from "../pages/Logout";
import Profile from "../pages/Profile";
import ViewAppointments from "./ViewAppointments";
import Chatbot from "./Chatbot";

const PatientRoutes = () => (
  <div>
    <Navbar />
    <Routes>
      <Route path="home" element={<Home />} />
      <Route path="clinics" element={<Clinic />} />
      <Route path="doctors/:id" element={<DoctorDetails />} />
      <Route path="view-appointment" element={<ViewAppointments />} />
      <Route path="chatbot" element={<Chatbot />} />
      <Route path="contact" element={<DoctorContact />} />
      <Route path="about" element={<About />} />
      <Route path="profile" element={<Profile />} />
      <Route path="logout" element={<Logout />} />
    </Routes>
  </div>
);

export default PatientRoutes;
