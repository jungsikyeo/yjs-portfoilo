import React, { useState } from "react";
import { SlideDown } from "react-slidedown";

export const Timeline = (props: any) => {
  const [openState, setOpenState] = useState(false);
  const onToggle = (e: any) => {
    setOpenState(!openState);
    props.onMenuHandler(e);
  };

  return (
    <div
      className={`${
        props.menuState.menuTimeline ? `border-select` : `border-no-select`
      }`}
    >
      <div
        id="menuTimeline"
        onClick={onToggle}
        className="component cursor-pointer codicon flex items-center"
      >
        <span
          className={`text-xs font-black pl-2 flex items-center 
                ${
                  openState ? `codicon-chevron-down` : `codicon-chevron-right`
                }`}
        >
          TIMELINE
        </span>
        <SlideDown className="my-dropdown-slidedown">
          {openState && <></>}
        </SlideDown>
      </div>
    </div>
  );
};
