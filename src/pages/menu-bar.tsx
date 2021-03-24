import React from "react";
import "../styles/menu-bar.css";

export const MenuBar = (props: any) => {
  return (
    <div className="menu-bar h-full absolute whitespace-normal">
      <div className="w-full h-full flex flex-col items-center justify-between">
        <ul className="w-full h-4/6 flex flex-col items-center justify-start codicon">
          <li
            id="menuRecentProjects"
            onClick={props.onMenuHandler}
            className={`codicon-files flex items-center justify-center ${
              props.menuState.menuRecentProjects ? `select` : ``
            }`}
          />
          <li
            id="menuTechSkills"
            onClick={props.onMenuHandler}
            className={`codicon-search flex items-center justify-center ${
              props.menuState.menuTechSkills ? `select` : ``
            }`}
          />
          <li
            id="menuTimeline"
            onClick={props.onMenuHandler}
            className={`codicon-source-control flex items-center justify-center ${
              props.menuState.menuTimeline ? `select` : ``
            }`}
          />
          <li
            id="menuLicense"
            onClick={props.onMenuHandler}
            className={`codicon-extensions flex items-center justify-center ${
              props.menuState.menuLicense ? `select` : ``
            }`}
          />
          <li
            id="menuGithub"
            onClick={props.onMenuHandler}
            className={`codicon-github flex items-center justify-center ${
              props.menuState.menuGithub ? `select` : ``
            }`}
          />
          <a href="mailto:saeminam@gmail.com,mdotcom12@naver.com">
            <li
              id="menuEmail"
              className={`codicon-mail flex items-center justify-center ${
                props.menuState.menuEmail ? `select` : ``
              }`}
            />
          </a>
        </ul>
        <ul className="w-full h-2/6 flex flex-col items-center justify-end codicon">
          <li
            id="menuAboutMe"
            onClick={props.onMenuHandler}
            className={`codicon-account flex items-center justify-center ${
              props.menuState.menuAboutMe ? `select` : ``
            }`}
          />
          <li
            id="menuSettings"
            onClick={props.onMenuHandler}
            className="codicon-settings-gear flex items-center justify-center"
          >
            <div
              className={`absolute setting-layer shadow-md 
              ${
                props.menuState.menuSettings && props.toggleState.menuSettings
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
