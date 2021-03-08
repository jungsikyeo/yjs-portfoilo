import React from "react";
import "../styles/theme.css";

export const MainRight = () => {
  return (
    <div
      className="h-full absolute whitespace-normal"
      style={{
        left: "348px",
        width: "calc(100% - 348px)",
        background: "var(--mainRightBackground)",
        zIndex: 100,
      }}
    >
      right
    </div>
  );
};
