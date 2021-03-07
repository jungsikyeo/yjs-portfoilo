import React from "react";
import "../styles/theme.css";

export const MainLeft = (props: any) => {
  return (
    <div
      className="h-full absolute whitespace-normal"
      style={{
        left: "48px",
        width: "300px",
        background: "var(--mainLeftBackground)",
        zIndex: -1,
      }}
    >
      left
    </div>
  );
};
