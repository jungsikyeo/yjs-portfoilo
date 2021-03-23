import React from "react";
import { SlideDown } from "react-slidedown";
import { Page } from "./page";
import { initTab } from "../App";

export const LicenseList = (props: any) => {
  const pageList = props.allContents?.filter(
    (item: any) => item.name === "LICENSE"
  );
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
