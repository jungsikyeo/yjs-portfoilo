import React from "react";
import { SlideDown } from "react-slidedown";

export const RecentProjects = (props: any) => {
  const pageList = props.allContents.filter(
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
      </div>
      <SlideDown className="my-dropdown-slidedown">
        {props.menuState.menuRecentProjects &&
          props.toggleState.menuRecentProjects && (
            <div className="repository-list">
              <ul className="codicon">
                {pageList.map((page: any) => {
                  return (
                    <li
                      key={page.title}
                      id={page.title}
                      onClick={() => props.onAddTabsHandler(page.title)}
                      className={`py-0.5 cursor-pointer flex items-center`}
                    >
                      <div
                        className={`${page.icon} flex items-center px-5`}
                        title={page.title}
                      >
                        {page.title}
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          )}
      </SlideDown>
    </div>
  );
};
