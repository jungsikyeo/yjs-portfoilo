import React, { useState } from "react";
import "../styles/theme.css";
import "../styles/menu-bar.css";

export const MenuBar = (props: any) => {
  let menuList: { [index: string]: any } = {
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
      className="h-full absolute whitespace-normal"
      style={{
        left: "0px",
        width: "48px",
        background: "var(--menuBarBackground)",
        zIndex: 100,
      }}
    >
      <div className="w-full h-full flex flex-col items-center justify-between">
        <ul className="w-full h-4/6 flex flex-col items-center justify-start codicon">
          <li
            id="menuFiles"
            title={`포트폴리오 목록`}
            onClick={onMenuHandler}
            className={`codicon-files flex items-center justify-center ${
              menuState.menuFiles ? `select` : ``
            }`}
          />
          <li
            id="menuSearch"
            title={`보유기술 목록`}
            onClick={onMenuHandler}
            className={`codicon-search flex items-center justify-center ${
              menuState.menuSearch ? `select` : ``
            }`}
          />
          <li
            id="menuControl"
            title={`타임라인`}
            onClick={onMenuHandler}
            className={`codicon-source-control flex items-center justify-center ${
              menuState.menuControl ? `select` : ``
            }`}
          />
          <li
            id="menuDebug"
            title={`공부중`}
            onClick={onMenuHandler}
            className={`codicon-debug-alt flex items-center justify-center ${
              menuState.menuDebug ? `select` : ``
            }`}
          />
          <li
            id="menuExtensions"
            title={`향후 목표`}
            onClick={onMenuHandler}
            className={`codicon-extensions flex items-center justify-center ${
              menuState.menuExtensions ? `select` : ``
            }`}
          />
          <li
              id="menuGithub"
              title={`깃허브 목록`}
              onClick={onMenuHandler}
              className={`codicon-github flex items-center justify-center ${
                  menuState.menuGithub ? `select` : ``
              }`}
          />
        </ul>
        <ul className="w-full h-2/6 flex flex-col items-center justify-end codicon">
          <li
            id="menuAccount"
            title={`프로필`}
            onClick={onMenuHandler}
            className={`codicon-account flex items-center justify-center ${
              menuState.menuAccount ? `select` : ``
            }`}
          />
          <li
            id="menuSettings"
            title={`테마 설정`}
            onClick={onMenuHandler}
            className="codicon-settings-gear flex items-center justify-center"
          >
            <div
              className={`absolute setting-layer shadow-md 
              ${menuState.menuSettings && settingState ? `block` : `hidden`}`}
            >
              <ul className="flex flex-col items-start">
                <li id="dracula" onClick={props.theme}>
                  <span>Color Theme : Dracula</span>
                </li>
                <li className="list-border self-center" />
                <li id="dark" onClick={props.theme}>
                  <span>Color Theme : Dark (Visual Studio)</span>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};
