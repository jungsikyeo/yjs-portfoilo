import React from "react";
import "../styles/theme.css";

export const Footer = () => {
  return (
    <div
      style={{
        top: "calc(100% - 22px)",
        height: "22px",
        background: "var(--footerBackground)",
        zIndex: 200,
      }}
    >
      <span className="absolute">footer</span>
    </div>
  );
};
