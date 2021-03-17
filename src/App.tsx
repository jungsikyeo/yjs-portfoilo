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

const contentTabs: any[] = [
  {
    icon: "warning",
    title: "README.md",
    showClose: true,
    content: "프로필 페이지입니다.",
  },
  {
    icon: "warning",
    title: "TIMELINE.md",
    showClose: true,
    content:
        "{\n" +
        '"name": "Unisoft Online Exam",\n' +
        '"url": "",\n' +
        '"description": "Full featured examination management system",\n' +
        '"client": "Thien An Information Technology Company",\n' +
        '"achievement": "Being used in 2 universities even before the official launch",\n' +
        '"duration": "4 months (2020 Mar - now)",\n' +
        '"teamSize": 1,\n' +
        '"roles": [\n' +
        '"Solo developer",\n' +
        '"Backend development",\n' +
        '"Frontend development",\n' +
        '"UI/UX desgign",\n' +
        '"Software architect",\n' +
        '"Database design"\n' +
        "],\n" +
        '"techs": [\n' +
        '"Typesript",\n' +
        '"Node.js",\n' +
        '"Nest.js",\n' +
        '"Vue.js",\n' +
        '"Typeorm",\n' +
        '"Jest",\n' +
        '"SCSS",\n' +
        '"Tailwindcss",\n' +
        '"SQL Server",\n' +
        '"Redis",\n' +
        '"Websocket",\n' +
        '"Windows server",\n' +
        '"IIS",\n' +
        '"Git"\n' +
        "],\n" +
        '"features": [\n' +
        '"Question bank management",\n' +
        '"Exam paper bank management",\n' +
        '"Exam, Exam result, Room, Supervisor management",\n' +
        '"Student, Class, Falcuty, Specialization management",\n' +
        '"Admin, Role, Department management",\n' +
        '"Dynamic authorization",\n' +
        '"View logs and history",\n' +
        '"Import from or export to different file format",\n' +
        '"Manage exam participation in real-time",\n' +
        '"Security enhancement, cheating annihilation",\n' +
        '"Ability to integrate with existing system"\n' +
        "]\n" +
        "}",
  },
];

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

  const [allTabs, setAllTabs] = useState(contentTabs);

  return (
    <div
      className="w-full h-screen select-none"
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
            <Contents allTabs={allTabs} setAllTabs={setAllTabs} />
            <Terminal allTabs={allTabs} setAllTabs={setAllTabs} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
