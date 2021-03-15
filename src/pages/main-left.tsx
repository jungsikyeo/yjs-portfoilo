import React from "react";
import "../styles/theme.css";
import "../styles/main-left.css";
import { GithubRepos } from "../components/github-repos";
import { RecentProjects } from "../components/recent-projects";
import { TechSkills } from "../components/tech-skills";
import { Timeline } from "../components/timeline";
import { LicenseList } from "../components/license-list";
import { AboutMe } from "../components/about-me";

export const MainLeft = (props: any) => {
  return (
    <div className="main-left h-full absolute whitespace-normal">
      <div className="w-full h-full component-list text-xs resize-x">
        <div className="component-title pl-5 flex items-center">
          <span className="text-xs font-medium overflow-hidden whitespace-nowrap overflow-ellipsis">
            EXPLORER
          </span>
        </div>
        <AboutMe
          onMenuHandler={props.onMenuHandler}
          menuState={props.menuState}
          settingState={props.settingState}
        />
        <RecentProjects
          onMenuHandler={props.onMenuHandler}
          menuState={props.menuState}
          settingState={props.settingState}
        />
        <TechSkills
          onMenuHandler={props.onMenuHandler}
          menuState={props.menuState}
          settingState={props.settingState}
        />
        <Timeline
          onMenuHandler={props.onMenuHandler}
          menuState={props.menuState}
          settingState={props.settingState}
        />
        <LicenseList
          onMenuHandler={props.onMenuHandler}
          menuState={props.menuState}
          onToggleHandler={props.onToggleHandler}
          toggleState={props.toggleState}
        />
        <GithubRepos
          onMenuHandler={props.onMenuHandler}
          menuState={props.menuState}
          onToggleHandler={props.onToggleHandler}
          toggleState={props.toggleState}
          repos={props.repos}
        />
      </div>
    </div>
  );
};
