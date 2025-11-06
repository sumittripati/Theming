import React from "react";
import { useAuth } from "../context/AuthContext";
import { useTheme } from "../context/ThemeContext";

const Footer = () => {
  const { user } = useAuth();
  const { theme } = useTheme();

  const cardStyle = {
    border: "1px solid gray",
    padding: "20px",
    margin: "20px",
    backgroundColor: theme === "light" ? "#f9f9f9" : "#444",
    color: theme === "light" ? "#000" : "#fff",
    borderRadius: "10px",
  };

  return (
    <div style={cardStyle}>
      <h2>Profile Page</h2>
      {user ? <p>Logged in as: {user}</p> : <p>Please login to view profile.</p>}
    </div>
  );
};

export default Footer;
