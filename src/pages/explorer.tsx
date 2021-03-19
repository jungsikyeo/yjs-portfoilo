import React from "react";
import "../styles/theme.css";
import "../styles/explorer.css";
import { GithubRepos } from "../components/github-repos";
import { RecentProjects } from "../components/recent-projects";
import { TechSkills } from "../components/tech-skills";
import { Timeline } from "../components/timeline";
import { LicenseList } from "../components/license-list";
import { AboutMe } from "../components/about-me";

export const Explorer = (props: any) => {
  return (
    <div className="explorer h-full absolute whitespace-normal" ref={props.explorerRef}>
      <div className="w-full h-full component-list text-xs">
        <div className="component-title pl-5 flex items-center">
          <span className="text-xs font-medium overflow-hidden whitespace-nowrap overflow-ellipsis">
            EXPLORER
          </span>
        </div>
        <AboutMe
          onMenuHandler={props.onMenuHandler}
          menuState={props.menuState}
          toggleState={props.toggleState}
        />
        <RecentProjects
          onMenuHandler={props.onMenuHandler}
          menuState={props.menuState}
          toggleState={props.toggleState}
        />
        <TechSkills
          onMenuHandler={props.onMenuHandler}
          menuState={props.menuState}
          toggleState={props.toggleState}
        />
        <Timeline
          onMenuHandler={props.onMenuHandler}
          menuState={props.menuState}
          toggleState={props.toggleState}
        />
        <LicenseList
          onMenuHandler={props.onMenuHandler}
          menuState={props.menuState}
          toggleState={props.toggleState}
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
