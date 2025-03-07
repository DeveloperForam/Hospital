import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Remove authentication data
    localStorage.removeItem("clinicAuthenticated");

    // Dispatch event to update authentication state
    window.dispatchEvent(new Event("storage"));

    // Redirect to login page
    navigate("/clinic/login");
  }, [navigate]);

  return null;
};

export default Logout;
