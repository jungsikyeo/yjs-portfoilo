import React from "react";
import "../styles/theme.css";
import "../styles/explorer.css";
import { GithubRepos } from "../components/github-repos";
import { RecentProjects } from "../components/recent-projects";
import { TechSkills } from "../components/tech-skills";
import { Timeline } from "../components/timeline";
import { LicenseList } from "../components/license-list";
import { AboutMe } from "../components/about-me";
import { Education } from "../components/education";
import { isMobile } from "react-device-detect";

export const Explorer = (props: any) => {
  return (
    <div
      className="explorer h-full absolute whitespace-normal"
      ref={props.explorerRef}
      style={{
        left: props.explorerCloseState ? "-200px" : "48px",
      }}
    >
      <div className="w-full h-full component-list text-xs">
        <div className="component-title pl-5 flex items-center justify-between codicon">
          <span className="text-xs font-medium overflow-hidden whitespace-nowrap overflow-ellipsis">
            EXPLORER
          </span>
          <span
            onClick={props.onCloseExplorerHandler}
            className={
              !isMobile
                ? "hidden"
                : "block pr-5 cursor-pointer codicon-panel-close text-xs"
            }
          />
        </div>
        <AboutMe
          onMenuHandler={props.onMenuHandler}
          menuState={props.menuState}
          toggleState={props.toggleState}
          allContents={props.allContents}
          onAddTabsHandler={props.onAddTabsHandler}
          currentTab={props.currentTab}
        />
        <RecentProjects
          onMenuHandler={props.onMenuHandler}
          menuState={props.menuState}
          toggleState={props.toggleState}
          allContents={props.allContents}
          onAddTabsHandler={props.onAddTabsHandler}
          currentTab={props.currentTab}
        />
        <TechSkills
          onMenuHandler={props.onMenuHandler}
          menuState={props.menuState}
          toggleState={props.toggleState}
          allContents={props.allContents}
          onAddTabsHandler={props.onAddTabsHandler}
          currentTab={props.currentTab}
        />
        <Timeline
          onMenuHandler={props.onMenuHandler}
          menuState={props.menuState}
          toggleState={props.toggleState}
          allContents={props.allContents}
          onAddTabsHandler={props.onAddTabsHandler}
          currentTab={props.currentTab}
        />
        <Education
          onMenuHandler={props.onMenuHandler}
          menuState={props.menuState}
          toggleState={props.toggleState}
          allContents={props.allContents}
          onAddTabsHandler={props.onAddTabsHandler}
          currentTab={props.currentTab}
        />
        <LicenseList
          onMenuHandler={props.onMenuHandler}
          menuState={props.menuState}
          toggleState={props.toggleState}
          allContents={props.allContents}
          onAddTabsHandler={props.onAddTabsHandler}
          currentTab={props.currentTab}
        />
        <GithubRepos
          onMenuHandler={props.onMenuHandler}
          menuState={props.menuState}
          toggleState={props.toggleState}
          repos={props.repos}
        />
      </div>
    </div>
  );
};
