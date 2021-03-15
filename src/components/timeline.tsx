import React from "react";
import { SlideDown } from "react-slidedown";

export const Timeline = (props: any) => {
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
          className={`text-xs font-black pl-2 flex items-center 
                ${
                  props.menuState.menuTimeline && props.toggleState.menuTimeline
                    ? `codicon-chevron-down`
                    : `codicon-chevron-right`
                }`}
        >
          TIMELINE
        </span>
        <SlideDown className="my-dropdown-slidedown">
          {props.menuState.menuTimeline && props.toggleState.menuTimeline && (
            <></>
          )}
        </SlideDown>
      </div>
    </div>
  );
};
