import React from "react";
import "../styles/theme.css";

export const Footer = () => {
  return (
    <div
      style={{
        bottom: "0",
        height: "22px",
        background: "var(--footerBackground)",
        zIndex: 500,
      }}
    >
      <span className="absolute">footer</span>
    </div>
  );
};
