import React from "react";
import { SlideDown } from "react-slidedown";
import { Page } from "./page";
import { initTab } from "../App";

export const TechSkills = (props: any) => {
  const pageList = props.allContents?.filter(
    (item: any) => item.name === "TECH SKILLS"
  );
  return (
    <div
      className={`${
        props.menuState.menuTechSkills ? `border-select` : `border-no-select`
      }`}
    >
      <div
        id="menuTechSkills"
        onClick={props.onMenuHandler}
        className="component cursor-pointer codicon flex items-center"
      >
        <span
          className={`text-xs font-black pl-2 flex items-center 
                ${
                  props.menuState.menuTechSkills &&
                  props.toggleState.menuTechSkills
                    ? `codicon-chevron-down`
                    : `codicon-chevron-right`
                }`}
        >
          TECH SKILLS
        </span>
      </div>
      <SlideDown className="my-dropdown-slidedown">
        {props.menuState.menuTechSkills && props.toggleState.menuTechSkills && (
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
