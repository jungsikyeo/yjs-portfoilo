import React from "react";
import { SlideDown } from "react-slidedown";

export const GithubRepos = (props: any) => {

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
          className={`text-xs font-black pl-2 flex items-center 
                ${
                  props.menuState.menuGithub && props.toggleState.menuGithub
                    ? `codicon-chevron-down`
                    : `codicon-chevron-right`
                }`}
        >
          REPOSITORY
        </span>
      </div>
      <SlideDown className="my-dropdown-slidedown">
        {props.menuState.menuGithub && props.toggleState.menuGithub && (
          <div className="repository-list pl-5">
            <ul className="codicon">
              {props.repos.map((repo: any) => (
                <li
                  key={repo["name"]}
                  id={repo["name"]}
                  className={`py-0.5 cursor-pointer flex items-center
                      ${
                        false ? `codicon-chevron-down` : `codicon-chevron-right`
                      }
                      `}
                >
                  <div className="folder">{repo["name"]}</div>
                </li>
              ))}
            </ul>
          </div>
        )}
      </SlideDown>
    </div>
  );
};
