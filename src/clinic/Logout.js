import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    debugger
    localStorage.removeItem("clinicAuthenticated");
    window.dispatchEvent(new Event("storage"));  // 🔹 Force authentication update
    navigate("/clinic/login");
  }, [navigate]);

  return null;
};

export default Logout;
