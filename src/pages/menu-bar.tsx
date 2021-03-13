import React from "react";
import "../styles/menu-bar.css";

export const MenuBar = (props: any) => {
  return (
    <div className="menu-bar h-full absolute whitespace-normal">
      <div className="w-full h-full flex flex-col items-center justify-between">
        <ul className="w-full h-4/6 flex flex-col items-center justify-start codicon">
          <li
            id="menuFiles"
            title={`포트폴리오 목록`}
            onClick={props.onMenuHandler}
            className={`codicon-files flex items-center justify-center ${
              props.menuState.menuFiles ? `select` : ``
            }`}
          />
          <li
            id="menuSearch"
            title={`보유기술 목록`}
            onClick={props.onMenuHandler}
            className={`codicon-search flex items-center justify-center ${
              props.menuState.menuSearch ? `select` : ``
            }`}
          />
          <li
            id="menuControl"
            title={`타임라인`}
            onClick={props.onMenuHandler}
            className={`codicon-source-control flex items-center justify-center ${
              props.menuState.menuControl ? `select` : ``
            }`}
          />
          <li
            id="menuDebug"
            title={`공부중`}
            onClick={props.onMenuHandler}
            className={`codicon-debug-alt flex items-center justify-center ${
              props.menuState.menuDebug ? `select` : ``
            }`}
          />
          <li
            id="menuExtensions"
            title={`향후 목표`}
            onClick={props.onMenuHandler}
            className={`codicon-extensions flex items-center justify-center ${
              props.menuState.menuExtensions ? `select` : ``
            }`}
          />
          <li
            id="menuGithub"
            title={`깃허브 목록`}
            onClick={props.onMenuHandler}
            className={`codicon-github flex items-center justify-center ${
              props.menuState.menuGithub ? `select` : ``
            }`}
          />
        </ul>
        <ul className="w-full h-2/6 flex flex-col items-center justify-end codicon">
          <li
            id="menuAccount"
            title={`프로필`}
            onClick={props.onMenuHandler}
            className={`codicon-account flex items-center justify-center ${
              props.menuState.menuAccount ? `select` : ``
            }`}
          />
          <li
            id="menuSettings"
            title={`테마 설정`}
            onClick={props.onMenuHandler}
            className="codicon-settings-gear flex items-center justify-center"
          >
            <div
              className={`absolute setting-layer shadow-md 
              ${
                props.menuState.menuSettings && props.settingState
                  ? `block`
                  : `hidden`
              }`}
            >
              <ul className="flex flex-col items-start">
                <li id="dracula" onClick={props.onThemeHandler}>
                  <span>Color Theme : Dracula</span>
                </li>
                <li className="list-border self-center" />
                <li id="dark" onClick={props.onThemeHandler}>
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
