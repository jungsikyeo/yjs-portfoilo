import React, { useState } from "react";
import "../styles/theme.css";
import "../styles/main-left.css";

export const MainLeft = (props: any) => {
  const [repoSelect, setRepoSelect] = useState(false);
  const onRepoSelect = () => setRepoSelect(!repoSelect);

  const [folderSelect, setFolderSelect] = useState(false);
  const onFolderSelect = (e:any)=> {
    setFolderSelect(!folderSelect);
  }

  return (
    <div className="main-left h-full absolute whitespace-normal">
      {props.menuState?.menuGithub && (
        <div className="w-full h-full github-left text-xs">
          <div className="github-left-title pl-5 flex items-center">
            <span className="text-xs font-medium overflow-hidden whitespace-nowrap overflow-ellipsis">
              GITHUB
            </span>
          </div>
          <div className="repository">
            <div
              onClick={onRepoSelect}
              className={`cursor-pointer codicon 
              ${repoSelect && !folderSelect ? `border-select` : `border-no-select`}`}
            >
              <span
                className={`text-xs font-bold pl-2 flex items-center 
                ${
                  repoSelect && !folderSelect ? `codicon-chevron-down` : `codicon-chevron-right`
                }`}
              >
                REPOSITORY
              </span>
            </div>
            {repoSelect && (
              <div className="repository-list pl-5">
                <ul className="codicon">
                  {props.repos.map((repo: any) => (
                    <li
                      key={repo["id"]}
                      onClick={onFolderSelect}
                      className={`py-0.5 cursor-pointer flex items-center
                      ${
                        folderSelect
                          ? `codicon-chevron-down`
                          : `codicon-chevron-right`
                      }
                      `}
                    >
                      <div className="folder">{repo["name"]}</div>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
