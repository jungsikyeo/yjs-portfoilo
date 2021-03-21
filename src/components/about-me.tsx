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
      </div>
      <SlideDown className="my-dropdown-slidedown">
        {props.menuState.menuAboutMe && props.toggleState.menuAboutMe && (
          <div className="repository-list pl-5">
            <ul className="codicon">
              <li
                key="README.md"
                id="README.md"
                className={`py-0.5 cursor-pointer flex items-center`}
              >
                <div className="markdown flex items-center" title={`README.md`}>
                  README.md
                </div>
              </li>
            </ul>
          </div>
        )}
      </SlideDown>
    </div>
  );
};
