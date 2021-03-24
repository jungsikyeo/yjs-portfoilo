import React from "react";
import { SlideDown } from "react-slidedown";
import { Page } from "./page";
import { initTab } from "../App";

export const RecentProjects = (props: any) => {
  const pageList = props.allContents?.filter(
    (item: any) => item.name === "RECENT PROJECTS"
  );
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
          className={`text-base font-black pl-2 flex items-center 
                ${
                  props.menuState.menuRecentProjects &&
                  props.toggleState.menuRecentProjects
                    ? `codicon-chevron-down`
                    : `codicon-chevron-right`
                }`}
        >
          RECENT PROJECTS
        </span>
      </div>
      <SlideDown className="my-dropdown-slidedown">
        {props.menuState.menuRecentProjects &&
          props.toggleState.menuRecentProjects && (
            <Page
              pageList={pageList.length > 0 ? pageList : [initTab]}
              currentTab={props.currentTab}
              onAddTabsHandler={props.onAddTabsHandler}
            />
          )}
      </SlideDown>
    </div>
  );
};
