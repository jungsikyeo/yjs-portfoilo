import React from "react";
import { SlideDown } from "react-slidedown";
import { Page } from "./page";
import { initTab } from "../App";

export const AboutMe = (props: any) => {
  const pageList = props.allContents?.filter(
    (item: any) => item.name === "ABOUT ME"
  );
  return (
    <div
      className={`${
        props.menuState.menuAboutMe ? `border-select` : `border-no-select`
      }`}
    >
      <div
        id="menuAboutMe"
        onClick={props.onMenuHandler}
        className="component cursor-pointer codicon flex items-center"
      >
        <span
          className={`text-base font-black pl-2 flex items-center 
                ${
                  props.menuState.menuAboutMe && props.toggleState.menuAboutMe
                    ? `codicon-chevron-down`
                    : `codicon-chevron-right`
                }`}
        >
          ABOUT ME
        </span>
      </div>
      <SlideDown className="my-dropdown-slidedown">
        {props.menuState.menuAboutMe && props.toggleState.menuAboutMe && (
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
