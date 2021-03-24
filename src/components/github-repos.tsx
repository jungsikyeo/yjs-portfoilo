import React from "react";
import { SlideDown } from "react-slidedown";

export const GithubRepos = (props: any) => {
  const onOpenWindowRepo = (repoUrl: string) => {
    window.open(repoUrl, "_new");
  };
  return (
    <div
      className={`${
        props.menuState.menuGithub ? `border-select` : `border-no-select`
      }`}
    >
      <div
        id="menuGithub"
        onClick={props.onMenuHandler}
        className="component cursor-pointer codicon flex items-center"
      >
        <span
          className={`text-base font-black pl-2 flex items-center 
                ${
                  props.menuState.menuGithub && props.toggleState.menuGithub
                    ? `codicon-chevron-down`
                    : `codicon-chevron-right`
                }`}
        >
          GITHUB
        </span>
      </div>
      <SlideDown className="my-dropdown-slidedown">
        {props.menuState.menuGithub && props.toggleState.menuGithub && (
          <div className="repository-list">
            <ul className="codicon">
              {props.repos.map((repo: any) => (
                <li
                  key={repo["name"]}
                  id={repo["name"]}
                  onClick={() => onOpenWindowRepo(repo["svn_url"])}
                  className={`py-0.5 cursor-pointer flex items-center`}
                >
                  <div
                    className="codicon-link flex items-center px-5"
                    title={repo["name"]}
                  >
                    {repo["name"]}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
      </SlideDown>
    </div>
  );
};
