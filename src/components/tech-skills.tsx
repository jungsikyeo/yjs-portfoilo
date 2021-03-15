import React, { useState } from "react";
import { SlideDown } from "react-slidedown";

export const TechSkills = (props: any) => {
  const [openState, setOpenState] = useState(false);
  const onToggle = (e: any) => {
    setOpenState(!openState);
    props.onMenuHandler(e);
  };

  return (
    <div
      className={`${
        props.menuState.menuTechSkills ? `border-select` : `border-no-select`
      }`}
    >
      <div
        id="menuTechSkills"
        onClick={onToggle}
        className="component cursor-pointer codicon flex items-center"
      >
        <span
          className={`text-xs font-black pl-2 flex items-center 
                ${
                  openState ? `codicon-chevron-down` : `codicon-chevron-right`
                }`}
        >
          TECH SKILLS
        </span>
        <SlideDown className="my-dropdown-slidedown">
          {openState && <></>}
        </SlideDown>
      </div>
    </div>
  );
};
