import React from "react";
import { SlideDown } from "react-slidedown";

export const LicenseList = (props: any) => {
  return (
    <div
      className={`${
        props.menuState.menuLicense ? `border-select` : `border-no-select`
      }`}
    >
      <div
        id="menuLicense"
        onClick={props.onMenuHandler}
        className="component cursor-pointer codicon flex items-center"
      >
        <span
          className={`text-xs font-black pl-2 flex items-center 
                ${
                  props.menuState.menuLicense && props.toggleState.menuLicense
                    ? `codicon-chevron-down`
                    : `codicon-chevron-right`
                }`}
        >
          LICENSE
        </span>
      </div>
      <SlideDown className="my-dropdown-slidedown">
        {props.menuState.menuLicense && props.toggleState.menuLicense && (
            <></>
        )}
      </SlideDown>
    </div>
  );
};
