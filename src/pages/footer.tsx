import React from "react";
import "../styles/theme.css";

export const Footer = (props: any) => {
  return (
    <div
      style={{
        top: "calc(100% - 22px)",
        height: "22px",
        background: "var(--footerBackground)",
        zIndex: 100,
      }}
    >
      <span className="absolute">footer</span>
    </div>
  );
};
