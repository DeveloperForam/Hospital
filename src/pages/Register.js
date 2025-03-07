import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/auth.css";

const Register = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [message, setMessage] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();

    if (!role) {
      setMessage("Please select a role.");
      return;
    }

    // Prevent admin from being registered
    if (role.toLowerCase() === "admin") {
      setMessage("Admin registration is not allowed.");
      return;
    }

    // Store user details in local storage (Dummy Database)
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const userExists = users.some((u) => u.email === email);

    if (userExists) {
      setMessage("User already exists. Please login.");
      return;
    }

    const newUser = { name, email, password, role };
    localStorage.setItem("users", JSON.stringify([...users, newUser]));
    
    setMessage("Registration successful! Redirecting...");
    setTimeout(() => navigate("/login"), 1500);
  };

  return (
    <div className="auth-container fade-in">
      <h2 className="auth-title">Register</h2>
      <form className="auth-form" onSubmit={handleRegister}>
        <input 
          type="text" 
          placeholder="Full Name" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          required 
        />
        <input 
          type="email" 
          placeholder="Email Address" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          required 
        />
        <input 
          type="password" 
          placeholder="Password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          required 
        />
        <select value={role} onChange={(e) => setRole(e.target.value)} required>
          <option value="">Select Role</option>
          <option value="Clinic">Clinic</option>
          <option value="Patient">Patient</option>
        </select>
        <button type="submit" className="btn">Register</button>
      </form>
      {message && <p className="message">{message}</p>}
      <p className="switch-auth">Already have an account? <span onClick={() => navigate("/login")}>Login</span></p>
    </div>
  );
};

export default Register;
