import React from "react";
import { SlideDown } from "react-slidedown";

export const AboutMe = (props: any) => {
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
          className={`text-xs font-black pl-2 flex items-center 
                ${
                  props.menuState.menuAboutMe && props.toggleState.menuAboutMe
                    ? `codicon-chevron-down`
                    : `codicon-chevron-right`
                }`}
        >
          ABOUT ME
        </span>
        <SlideDown className="my-dropdown-slidedown">
          {props.menuState.menuAboutMe && props.toggleState.menuAboutMe && (
            <></>
          )}
        </SlideDown>
      </div>
    </div>
  );
};
