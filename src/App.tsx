import React, { useEffect, useRef, useState } from "react";
import "./styles/App.css";
import "./styles/codicon.css";
import "./styles/tailwind.css";
import "./styles/theme.css";
import "react-slidedown/lib/slidedown.css";
import { MenuBar } from "./pages/menu-bar";
import { Explorer } from "./pages/explorer";
import { Contents } from "./pages/contents";
import { Helmet } from "react-helmet-async";
import { isMobile } from "react-device-detect";

interface IFTab {
  name: string;
  icon: string;
  title: string;
  showClose: boolean;
  content: string;
  projects: [
    title: string,
    description:string,
    screenshot: []
  ] | null
}
export const initTab = {
  name: "",
  icon: "",
  title: "",
  showClose: false,
  content: "",
  projects: null
};

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

  const [allTabs, setAllTabs] = useState<[IFTab]>([initTab]);
  const [activeTab, handleTabSwitch] = useState(0);
  const [currentTab, setCurrentTab] = useState(allTabs[0]);
  useEffect(() => {
    if (allTabs && allTabs.length > 0) {
      setCurrentTab(allTabs[activeTab]);
    }
  }, [activeTab, allTabs]);

  const handleTabPositionChange = (a: number, b: number) => {
    let newTabs: [IFTab] = [...allTabs];
    let c = newTabs[a];
    newTabs[a] = newTabs[b];
    newTabs[b] = c;

    if (activeTab === a) {
      handleTabSwitch(b);
    } else if (activeTab === b) {
      handleTabSwitch(a);
    }
    setAllTabs(newTabs);
  };
  const handleTabClose = (index: number) => {
    if (allTabs.length === 1) {
      return;
    }
    let newTabs: [IFTab] = [...allTabs];
    newTabs.splice(index, 1);

    if (activeTab >= newTabs.length) {
      handleTabSwitch(newTabs.length - 1);
    }
    setAllTabs(newTabs);
  };
  const [allContents, setAllContents] = useState<[IFTab]>(allTabs);
  useEffect(() => {
    const url = "https://strapi.yjsnas.synology.me/portfolios";
    fetch(url, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        data?.forEach((item: any) => {
          if (item.name === "ABOUT ME") {
            const firstContentTab = allTabs[0];
            firstContentTab.name = item.name;
            firstContentTab.title = item.title;
            firstContentTab.icon = item.icon;
            firstContentTab.showClose = item.showClose;
            firstContentTab.content = item.content;
            firstContentTab.projects = item.projects
            setAllTabs([firstContentTab]);
            setCurrentTab(firstContentTab);
          }
        });
        setAllContents(data);
      });
  }, []);
  const onAddTabsHandler = async (title: string) => {
    const newAllTabs: [IFTab] = allTabs;
    let findIndex = newAllTabs.findIndex((item: IFTab) => item.title === title);
    if (findIndex < 0) {
      const newTab: IFTab = allContents.filter(
        (item: IFTab) => item.title === title
      )[0];
      await newAllTabs.push(newTab);
      await setAllTabs(newAllTabs);
      findIndex = await (newAllTabs.length - 1);
    }
    await setCurrentTab(newAllTabs[findIndex]);
    await handleTabSwitch(findIndex);
    await onCloseExplorerHandler();
  };
  const onCloseExplorerHandler = () => {
    if(!explorerRef.current || !isMobile) {
      return;
    }
    explorerRef.current.style.transform = "translateX(-348px)";
    explorerRef.current.style.transition = "all .5s ease";
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
    menuEducation: false,
    menuLicense: false,
    menuGithub: false,
    menuAboutMe: true,
    menuEmail: false,
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
    if(!newMenuState.menuSettings) await onExplorerMenuHandler();
  };

  const explorerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);
  const handleDrag = (movementX: number, movementY: number) => {
    const contentPanel = contentRef.current;
    const terminalPanel = terminalRef.current;
    if (!contentPanel || !terminalPanel) {
      return;
    }
    const { y: terminalY, bottom } = terminalPanel.getBoundingClientRect();
    console.log(terminalY, bottom, window.outerHeight);
    const top = terminalY + movementY;

    if (top < 200) {
      return;
    }

    if (top > 200 && document.body.offsetHeight - 60 > top) {
      terminalPanel.style.top = `${terminalY + movementY}px`;
      terminalPanel.style.height = `calc(100% - ${terminalY + movementY}px)`;
      contentPanel.style.height = `${terminalY + movementY}px`;
    }
  };

  const [explorerCloseState, setExplorerCloseState] = useState(isMobile);
  const onExplorerMenuHandler = () => {
    const explorerPanel = explorerRef.current;
    if (!explorerPanel) {
      return;
    }
    if (explorerCloseState) {
      explorerPanel.style.transform = "translateX(248px)";
      explorerPanel.style.transition = "all .5s ease";
    }
  };

  return (
    <div className="w-full h-screen select-none text-base z-10">
      <Helmet>
        <title>JungsikYeo Portfolio</title>
        <meta charSet="utf-8" />
        <meta name="description" content="JungsikYeo Portfolio" />
      </Helmet>
      <div className="w-full h-full flex whitespace-nowrap">
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
          explorerCloseState={explorerCloseState}
          allContents={allContents}
          onAddTabsHandler={onAddTabsHandler}
          currentTab={currentTab}
          repos={repos}
          explorerRef={explorerRef}
          onCloseExplorerHandler={onCloseExplorerHandler}
        />
        <Contents
          allTabs={allTabs}
          setAllTabs={setAllTabs}
          currentTab={currentTab}
          setCurrentTab={setCurrentTab}
          activeTab={activeTab}
          handleTabSwitch={handleTabSwitch}
          handleTabPositionChange={handleTabPositionChange}
          handleTabClose={handleTabClose}
          contentRef={contentRef}
          explorerCloseState={explorerCloseState}
        />
      </div>
    </div>
  );
}

export default App;
