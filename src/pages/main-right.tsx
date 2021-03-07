import React from "react";
import "../styles/theme.css";

export const MainRight = (props: any) => {
  return (
    <div
      className="h-full absolute whitespace-normal"
      style={{
        left: "348px",
        width: "calc(100% - 348px)",
        background: "var(--mainRightBackground)",
        zIndex: -1,
      }}
    >
      right
    </div>
  );
};
