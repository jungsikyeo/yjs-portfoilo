import React, { useState } from "react";
import { SlideDown } from "react-slidedown";

export const AboutMe = (props: any) => {
  const [openState, setOpenState] = useState(props.menuState.menuAboutMe);
  const onToggle = (e: any) => {
    if (props.menuState.menuAboutMe) {
      setOpenState(!openState);
    } else {
      setOpenState(false);
    }
    props.onMenuHandler(e);
  };

  return (
    <div
      className={`${
        props.menuState.menuAboutMe ? `border-select` : `border-no-select`
      }`}
    >
      <div
        id="menuAboutMe"
        onClick={onToggle}
        className="component cursor-pointer codicon flex items-center"
      >
        <span
          className={`text-xs font-black pl-2 flex items-center 
                ${
                  openState ? `codicon-chevron-down` : `codicon-chevron-right`
                }`}
        >
          ABOUT ME
        </span>
        <SlideDown closed={openState} className="my-dropdown-slidedown">
          {props.menuState.menuAboutMe && <></>}
        </SlideDown>
      </div>
    </div>
  );
};
