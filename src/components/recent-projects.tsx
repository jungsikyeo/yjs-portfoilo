import React, { useState } from "react";
import { SlideDown } from "react-slidedown";

export const RecentProjects = (props: any) => {
  const [openState, setOpenState] = useState(false);
  const onToggle = (e: any) => {
    setOpenState(!openState);
    props.onMenuHandler(e);
  };

  return (
    <div
      className={`${
        props.menuState.menuRecentProjects
          ? `border-select`
          : `border-no-select`
      }`}
    >
      <div
        id="menuRecentProjects"
        onClick={onToggle}
        className="component cursor-pointer codicon flex items-center"
      >
        <span
          className={`text-xs font-black pl-2 flex items-center 
                ${
                  openState ? `codicon-chevron-down` : `codicon-chevron-right`
                }`}
        >
          RECENT PROJECTS
        </span>
        <SlideDown className="my-dropdown-slidedown">
          {openState && <></>}
        </SlideDown>
      </div>
    </div>
  );
};
