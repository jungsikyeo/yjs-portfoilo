import React, { useEffect, useState } from "react";
import Tabs, { Tab } from "../components/tabs";
import "../styles/theme.css";
import "../styles/contents.css";
import "../styles/react-tabs.scss";
import ReactMarkdown from "react-markdown";

export const Contents = (props: any) => {
  const [activeTab, handleTabSwitch] = useState(0);
  const [currentTab, setCurrentTab] = useState(props?.allTabs[0]);
  const [viewMode, setViewMode] = useState(1);

  useEffect(() => {
    if (props.allTabs && props.allTabs.length > 0) {
      setCurrentTab(props.allTabs[activeTab]);
    }
  }, [activeTab, props.allTabs]);

  const handleTabPositionChange = (a: number, b: number) => {
    let newTabs = [...props.allTabs];
    let c = newTabs[a];
    newTabs[a] = newTabs[b];
    newTabs[b] = c;

    if (activeTab === a) {
      handleTabSwitch(b);
    } else if (activeTab === b) {
      handleTabSwitch(a);
    }
    props.setAllTabs(newTabs);
  };
  const handleTabClose = (index: number) => {
    if (props.allTabs.length === 1) {
      return;
    }
    let newTabs = [...props.allTabs];
    newTabs.splice(index, 1);

    if (activeTab >= newTabs.length) {
      handleTabSwitch(newTabs.length - 1);
    }
    props.setAllTabs(newTabs);
  };

  return (
    <div
      className="contents-container absolute whitespace-normal"
      ref={props.contentRef}
    >
      <Tabs
        active={activeTab}
        onTabSwitch={handleTabSwitch}
        onTabPositionChange={handleTabPositionChange}
        onTabClose={handleTabClose}
        draggable={true}
      >
        {props.allTabs?.map((tab: any) => (
          <Tab icon={tab.icon} title={tab.title} showClose={tab.showClose}>
            {tab.title}
          </Tab>
        ))}
      </Tabs>
      <div className="content-nav flex items-center justify-between">
        <div className="nav-title">{currentTab?.title}</div>
        <div className="nav-view codicon">
          <span
            onClick={() => setViewMode(0)}
            title="Show Source"
            className="codicon-go-to-file"
          />
          <span
            onClick={() => setViewMode(1)}
            title="Open Preview to the Side"
            className="codicon-open-preview"
          />
          <span
            onClick={() => setViewMode(2)}
            title="Show Preview"
            className="codicon-file-media"
          />
        </div>
      </div>
      <div className="flex content-wrapper" style={{ height: "calc(100% - 65px)" }}>
        <div
          className="content h-full"
          style={{
            width: viewMode === 0 ? "100%" : "50%",
            display: viewMode === 2 ? "none" : "block",
          }}
        >
          {currentTab?.content
            .split("\n")
            .map((lineContent: string, index: number) => {
              return (
                <div className="flex">
                  <div className="line-number flex justify-end">
                    {index + 1}
                  </div>
                  <div className="line-content select-text">{lineContent}</div>
                </div>
              );
            })}
        </div>
        <div
          className="content-preview h-full bg-white"
          style={{
            width: viewMode === 2 ? "100%" : "50%",
            display: viewMode === 0 ? "none" : "block",
          }}
        >
          <article className="prose">
            <ReactMarkdown>{currentTab?.content}</ReactMarkdown>
          </article>
        </div>
      </div>
    </div>
  );
};
