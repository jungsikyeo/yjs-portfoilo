import React, { useState } from "react";
import { useRef } from "react";
import { MarkdownViewer } from "../components/markdown-viewer";
import Tabs, { Tab } from "../components/tabs";
import "../styles/theme.css";
import "../styles/contents.css";
import "../styles/timeline.scss";
import "../styles/react-tabs.scss";
import { HtmlViewer } from "../components/html-viewer";
import {JsonViewer} from "../components/json-viewer";

export const Contents = (props: any) => {
  let localViewMode = localStorage.getItem("viewMode");
  if (!localViewMode) {
    localViewMode = "1";
    localStorage.setItem("viewMode", "1");
  }
  const [viewMode, setViewMode] = useState(+localViewMode);
  const leftContent = useRef<HTMLDivElement>(null);
  const rightContent = useRef<HTMLDivElement>(null);

  const onViewMode = async (mode: number) => {
    localStorage.setItem("viewMode", mode + "");

    const leftPanel = leftContent.current;
    const rightPanel = rightContent.current;

    if (!leftPanel || !rightPanel) {
      return;
    }

    if (mode === 0) {
      leftPanel.style.zIndex = "20";
      rightPanel.style.zIndex = "10";
    } else if (mode === 2) {
      leftPanel.style.zIndex = "10";
      rightPanel.style.zIndex = "20";
    } else {
      leftPanel.style.zIndex = "10";
      rightPanel.style.zIndex = "10";
    }
    setTimeout(() => {
      setViewMode(mode);
    }, 500);
  };

  const onScroll = (panel: string) => {
    if (!panel || !(panel === "left" || panel === "right")) {
      return;
    }
    let thisPanel =
      panel === "left" ? leftContent.current : rightContent.current;
    let targetPanel =
      panel === "left" ? rightContent.current : leftContent.current;
    if (!thisPanel || !targetPanel) {
      return;
    }
    targetPanel.scrollTop = thisPanel.scrollTop;
  };

  return (
    <div
      className="contents-container absolute whitespace-normal"
      ref={props.contentRef}
    >
      <Tabs
        active={props.activeTab}
        onTabSwitch={props.handleTabSwitch}
        onTabPositionChange={props.handleTabPositionChange}
        onTabClose={props.handleTabClose}
        draggable={true}
      >
        {props.allTabs?.map((tab: any) => (
          <Tab icon={tab.icon} title={tab.title} showClose={tab.showClose}>
            {tab.title}
          </Tab>
        ))}
      </Tabs>
      <div className="content-nav flex items-center justify-between">
        <div className="nav-title">{`${props.currentTab?.name} > ${props.currentTab?.title}`}</div>
        <div className="nav-view codicon">
          {props.currentTab?.icon === "markdown" && (
            <span
              onClick={() => onViewMode(0)}
              title="Show Source"
              className="codicon-go-to-file"
            />
          )}
          {props.currentTab?.icon === "markdown" && (
            <span
              onClick={() => onViewMode(1)}
              title="Open Preview to the Side"
              className="codicon-open-preview"
            />
          )}
          <span
            onClick={() => onViewMode(2)}
            title="Show Preview"
            className="codicon-file-media"
          />
        </div>
      </div>
      {props.currentTab?.icon === "markdown" ? (
        <MarkdownViewer
          currentTab={props.currentTab}
          contentRef={props.contentRef}
          leftContent={leftContent}
          rightContent={rightContent}
          viewMode={viewMode}
          onScroll={onScroll}
        />
      ) : props.currentTab?.icon === "json" ? (
        <>
          <JsonViewer currentTab={props.currentTab} />
        </>
      ) : (
        <>
          <HtmlViewer currentTab={props.currentTab} />
        </>
      )}
    </div>
  );
};
