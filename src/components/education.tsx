import React from "react";
import { SlideDown } from "react-slidedown";
import { Page } from "./page";
import { initTab } from "../App";

export const Education = (props: any) => {
  const pageList = props.allContents?.filter(
    (item: any) => item.name === "EDUCATION"
  );
  return (
    <div
      className={`${
        props.menuState.menuEducation ? `border-select` : `border-no-select`
      }`}
    >
      <div
        id="menuEducation"
        onClick={props.onMenuHandler}
        className="component cursor-pointer codicon flex items-center"
      >
        <span
          className={`text-base font-black pl-2 flex items-center 
                ${
                  props.menuState.menuEducation &&
                  props.toggleState.menuEducation
                    ? `codicon-chevron-down`
                    : `codicon-chevron-right`
                }`}
        >
          EDUCATION
        </span>
      </div>
      <SlideDown className="my-dropdown-slidedown">
        {props.menuState.menuEducation && props.toggleState.menuEducation && (
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
