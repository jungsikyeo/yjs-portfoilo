import React from "react";
import { SlideDown } from "react-slidedown";

export const RecentProjects = (props: any) => {
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
        onClick={props.onMenuHandler}
        className="component cursor-pointer codicon flex items-center"
      >
        <span
          className={`text-xs font-black pl-2 flex items-center 
                ${
                  props.menuState.menuRecentProjects &&
                  props.toggleState.menuRecentProjects
                    ? `codicon-chevron-down`
                    : `codicon-chevron-right`
                }`}
        >
          RECENT PROJECTS
        </span>
        <SlideDown className="my-dropdown-slidedown">
          {props.menuState.menuRecentProjects &&
            props.toggleState.menuRecentProjects && <></>}
        </SlideDown>
      </div>
    </div>
  );
};
