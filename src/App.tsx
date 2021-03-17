import React, { useEffect, useState } from "react";
import "./styles/App.css";
import "./styles/codicon.css";
import "./styles/tailwind.css";
import "./styles/theme.css";
import "react-slidedown/lib/slidedown.css";
import { MenuBar } from "./pages/menu-bar";
import { Explorer } from "./pages/explorer";
import { Footer } from "./pages/footer";
import { Contents } from "./pages/contents";
import { Terminal } from "./pages/terminal";

function App() {
  let theme = localStorage.getItem("theme");
  if (!theme) {
    theme = "dark";
    localStorage.setItem("theme", theme);
  }
  document.documentElement.setAttribute("data-theme", theme);

  const onThemeHandler = async (e: any) => {
    const changeThemeId = e.currentTarget.id;
    localStorage.setItem("theme", changeThemeId);
    await document.documentElement.classList.add("theme-transition");
    await document.documentElement.setAttribute("data-theme", changeThemeId);
    await window.setTimeout(() => {
      document.documentElement.classList.remove("theme-transition");
    }, 1500);
  };

  const [repos, setRepos] = useState([]);
  useEffect(() => {
    const headers = {
      Accept: "application/vnd.github.nightshade-preview+json",
      Authorization: `Token ${process.env.REACT_APP_GITHUB_PAT}`,
    };
    const url = "https://api.github.com/users/jungsikyeo/repos";
    fetch(url, {
      method: "GET",
      headers: headers,
    })
      .then((res) => res.json())
      .then((data) => setRepos(data));
  }, []);

  const menuList: { [index: string]: any } = {
    menuRecentProjects: false,
    menuTechSkills: false,
    menuTimeline: false,
    menuLicense: false,
    menuExtensions: false,
    menuGithub: false,
    menuAboutMe: true,
    menuSettings: false,
  };
  const [menuState, setMenuState] = useState(menuList);
  const [toggleState, setToggleSate] = useState(menuList);
  const onMenuHandler = async (e: any) => {
    const newMenuState = { ...menuState };
    const newToggleState = { ...toggleState };
    const activeMenu = e.currentTarget.id;
    for (let key in newMenuState) {
      if (key === activeMenu) {
        await (newMenuState[key] = true);
        await (newToggleState[key] = !newToggleState[key]);
      } else {
        await (newMenuState[key] = false);
        await (newToggleState[key] = false);
      }
    }
    await setMenuState(newMenuState);
    await setToggleSate(newToggleState);
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
            <MenuBar
              onThemeHandler={onThemeHandler}
              onMenuHandler={onMenuHandler}
              menuState={menuState}
              toggleState={toggleState}
            />
            <Explorer
              onMenuHandler={onMenuHandler}
              menuState={menuState}
              toggleState={toggleState}
              repos={repos}
            />
            <Contents />
            <Terminal />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
