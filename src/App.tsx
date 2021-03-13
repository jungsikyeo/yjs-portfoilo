import React, { useEffect, useState } from "react";
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
    localStorage.setItem("theme", changeThemeId);
    await document.documentElement.classList.add("theme-transition");
    await document.documentElement.setAttribute("data-theme", changeThemeId);
    await window.setTimeout(function () {
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
    menuGithub: false,
    menuFiles: false,
    menuSearch: false,
    menuControl: false,
    menuDebug: false,
    menuExtensions: false,
    menuAccount: true,
    menuSettings: false,
  };
  const [menuState, setMenuState] = useState(menuList);
  const [settingState, setSettingSate] = useState(false);
  const onMenuHandler = async (e: any) => {
    const newMenuState = { ...menuState };
    const activeMenu = e.currentTarget.id;
    if (activeMenu !== "menuSettings") {
      for (let key in newMenuState) {
        key === activeMenu
          ? await (newMenuState[key] = true)
          : await (newMenuState[key] = false);
      }
      setSettingSate(false);
    } else {
      setSettingSate(!settingState);
      await (newMenuState["menuSettings"] = true);
    }
    await setMenuState(newMenuState);
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
              settingState={settingState}
            />
            <MainLeft menuState={menuState} repos={repos} />
            <MainRight />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
