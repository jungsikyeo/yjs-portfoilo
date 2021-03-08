import React from "react";
import "./styles/App.css";
import "./styles/codicon.css";
import "./styles/tailwind.css";
import "./styles/theme.css";
import { MenuBar } from "./pages/menu-bar";
import { MainLeft } from "./pages/main-left";
import { MainRight } from "./pages/main-right";
import { Footer } from "./pages/footer";

function App() {
  let theme = localStorage.getItem("theme");
  if (!theme) {
    theme = "dark";
    localStorage.setItem("theme", theme);
  }
  document.documentElement.setAttribute("data-theme", theme);

  const onThemeHandler = async (e: any) => {
    const changeThemeId = e.currentTarget.id;
    document.documentElement.classList.add("theme-transition");
    document.documentElement.setAttribute("data-theme", changeThemeId);
    await window.setTimeout(function () {
      document.documentElement.classList.remove("theme-transition");
      localStorage.setItem("theme", changeThemeId);
    }, 1000);
  };

  return (
    <div
      className="w-full h-screen"
      style={{ fontSize: "13px", lineHeight: "1.4em", zIndex: 1 }}
    >
      <div
        style={{
          top: "0px",
          height: "calc(100% - 22px)",
        }}
      >
        <div
          className="w-full absolute whitespace-normal"
          style={{
            top: "0px",
            height: "calc(100% - 22px)",
          }}
        >
          <div className="w-full h-full relative whitespace-nowrap">
            <MenuBar theme={onThemeHandler} />
            <MainLeft />
            <MainRight />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
