import React from "react";
import { SlideDown } from "react-slidedown";

export const TechSkills = (props: any) => {
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
        <SlideDown className="my-dropdown-slidedown">
          {props.menuState.menuTechSkills &&
            props.toggleState.menuTechSkills && <></>}
        </SlideDown>
      </div>
    </div>
  );
};
