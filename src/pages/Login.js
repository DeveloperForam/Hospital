import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/auth.css";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    // Redirect if already logged in
    const loggedInUser = JSON.parse(localStorage.getItem("user"));
    if (loggedInUser) {
      redirectUser(loggedInUser.role);
    }
  }, []);

  const redirectUser = (role) => {
    const lowerRole = role.toLowerCase();
    switch (lowerRole) {
      case "admin":
        navigate("/admin/dashboard");
        break;
      case "clinic":
        navigate("/clinic/dashboard");
        break;
      case "patient":
        navigate("/home");
        break;
      default:
        navigate("/login");
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();

    if (email === "admin@gmail.com" && password === "123456") {
      // Fixed admin credentials
      const adminUser = { email, role: "admin" };
      localStorage.setItem("user", JSON.stringify(adminUser));
      setMessage("Admin login successful!");
      setTimeout(() => navigate("/admin/dashboard"), 1500);
      return;
    }

    // Check other users in local storage
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find((u) => u.email === email && u.password === password);

    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
      setMessage("Login successful!");
      setTimeout(() => {
        navigate(`/${user.role.toLowerCase()}/dashboard`);
      }, 1500);
    } else {
      setMessage("Invalid email or password.");
    }
  };

  return (
    <div className="auth-container fade-in">
      <h2 className="auth-title">Login</h2>
      <form className="auth-form" onSubmit={handleLogin}>
        <input 
          type="email" 
          placeholder="Enter Email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          required 
        />
        <input 
          type="password" 
          placeholder="Enter Password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          required 
        />
        <button type="submit" className="btn">Login</button>
      </form>
      {message && <p className="message">{message}</p>}
      <p className="switch-auth">Don't have an account? <span onClick={() => navigate("/register")}>Register</span></p>
    </div>
  );
};

export default Login;
