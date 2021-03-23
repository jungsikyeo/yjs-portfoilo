import React from "react";

export const Page = (props: any) => {
  return (
    <div className="repository-list">
      <ul className="codicon">
        {props.pageList.map((page: any) => {
          return (
            <li
              key={page.title}
              id={page.title}
              onClick={() => props.onAddTabsHandler(page.title)}
              className={`py-0.5 cursor-pointer flex items-center ${
                props.currentTab.title === page.title ? `page-select` : ``
              }`}
            >
              <div
                className={`${page.icon} flex items-center px-5`}
                title={page.title}
              >
                {page.title}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
