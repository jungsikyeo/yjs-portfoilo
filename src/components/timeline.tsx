import React from "react";
import { SlideDown } from "react-slidedown";
import { Page } from "./page";
import { initTab } from "../App";

export const Timeline = (props: any) => {
  const pageList = props.allContents?.filter(
    (item: any) => item.name === "TIMELINE"
  );
  return (
    <div
      className={`${
        props.menuState.menuTimeline ? `border-select` : `border-no-select`
      }`}
    >
      <div
        id="menuTimeline"
        onClick={props.onMenuHandler}
        className="component cursor-pointer codicon flex items-center"
      >
        <span
          className={`text-base font-black pl-2 flex items-center 
                ${
                  props.menuState.menuTimeline && props.toggleState.menuTimeline
                    ? `codicon-chevron-down`
                    : `codicon-chevron-right`
                }`}
        >
          TIMELINE
        </span>
      </div>
      <SlideDown className="my-dropdown-slidedown">
        {props.menuState.menuTimeline && props.toggleState.menuTimeline && (
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
