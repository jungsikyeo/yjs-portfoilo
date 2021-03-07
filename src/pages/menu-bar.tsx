import React, { useState } from "react";
import "../styles/theme.css";
import "../styles/menu-bar.css";

export const MenuBar = (props: any) => {
  let menuMore,
    menuFiles,
    menuSearch,
    menuControl,
    menuDebug,
    menuExtensions,
    menuAccount = true,
    menuSettings;
  const [menuState, setMenuState] = useState({
    menuMore: false,
    menuFiles: false,
    menuSearch: false,
    menuControl: false,
    menuDebug: false,
    menuExtensions: false,
    menuAccount: true,
    menuSettings: false,
  });

  const onMenuHandler = (e: any) => {
    const newMenuState = { ...menuState };
    const activeMenu = e.currentTarget.id;
    for (let key in newMenuState) {
      console.log(key);
    }
  };

  return (
    <div
      className="h-full absolute whitespace-normal"
      style={{
        left: "0px",
        width: "48px",
        background: "var(--menuBarBackground)",
        zIndex: -1,
      }}
    >
      <div className="w-full h-full flex flex-col items-center justify-between">
        <ul className="w-full h-4/6 flex flex-col items-center justify-start codicon">
          <li
            id="menuMore"
            onClick={onMenuHandler}
            className="codicon-menu flex items-center justify-center"
          />
          <li
            id="menuFiles"
            onClick={onMenuHandler}
            className="codicon-files flex items-center justify-center"
          />
          <li
            id="menuSearch"
            onClick={onMenuHandler}
            className="codicon-search flex items-center justify-center"
          />
          <li
            id="menuControl"
            onClick={onMenuHandler}
            className="codicon-source-control flex items-center justify-center"
          />
          <li
            id="menuDebug"
            onClick={onMenuHandler}
            className="codicon-debug-alt flex items-center justify-center"
          />
          <li
            id="menuExtensions"
            onClick={onMenuHandler}
            className="codicon-extensions flex items-center justify-center"
          />
        </ul>
        <ul className="w-full h-2/6 flex flex-col items-center justify-end codicon">
          <li
            id="menuAccount"
            onClick={onMenuHandler}
            className={`codicon-account flex items-center justify-center ${
              menuAccount ? `select` : ``
            }`}
          />
          <li
            id="menuSettings"
            onClick={onMenuHandler}
            className="codicon-settings-gear flex items-center justify-center"
          />
        </ul>
      </div>
    </div>
  );
};
