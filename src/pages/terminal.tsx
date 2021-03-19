import React, { useEffect, useState } from "react";
import "../styles/terminal.css";

const TerminalHeader = ({ onDrag }: any) => {
  const [mouseDown, setMouseDown] = useState(false);

  useEffect(() => {
    const handleMouseUp = () => setMouseDown(false);

    window.addEventListener("mouseup", handleMouseUp);
    return () => window.removeEventListener("mouseup", handleMouseUp);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: any) => onDrag(e.movementX, e.movementY);
    if (mouseDown) {
      window.addEventListener("mousemove", handleMouseMove);
    }
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseDown, onDrag]);
  const handleMouseDown = () => setMouseDown(true);

  return (
    <div
      onMouseDown={handleMouseDown}
      style={{
        cursor: "ns-resize",
        top: "-2px",
        left: "0",
        width: "100%",
        height: "4px",
      }}
    />
  );
};

export const Terminal = (props: any) => {
  return (
    <div
      className="terminal absolute whitespace-normal sm:hidden md:block box-border"
      ref={props.terminalRef}
    >
      <TerminalHeader onDrag={props.handleDrag} />
      Terminal
    </div>
  );
};
