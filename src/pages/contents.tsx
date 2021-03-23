import React, { useState } from "react";
import Tabs, { Tab } from "../components/tabs";
import "../styles/theme.css";
import "../styles/contents.css";
import "../styles/react-tabs.scss";
import ReactMarkdown from "react-markdown";
import { useRef } from "react";
import Minimap from "../components/minimap";
import ReactScrollWheelHandler from "../components/ReactScrollWheelHandler";

export const Contents = (props: any) => {
  let localViewMode = localStorage.getItem("viewMode");
  if (!localViewMode) {
    localViewMode = "2";
    localStorage.setItem("viewMode", "2");
  }
  const [viewMode, setViewMode] = useState(+localViewMode);
  const leftContent = useRef<HTMLDivElement>(null);
  const rightContent = useRef<HTMLDivElement>(null);

  const onViewMode = (mode: number) => {
    localStorage.setItem("viewMode", mode + "");
    setViewMode(mode);
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

  const parseMd = (md: string) => {
    //blockquote
    md = md.replace(
      /^\>(.+)/gm,
      "<span style='color: var(--contentsContentMarkdownBlockquoteFontColor);'>$1</span>"
    );

    //h
    md = md.replace(
      /[\#]{6}(.+)/g,
      `<span style='color: var(--contentsContentMarkdownHFontColor);'>######$1</span>`
    );
    md = md.replace(
      /[\#]{5}(.+)/g,
      `<span style='color: var(--contentsContentMarkdownHFontColor);'>#####$1</span>`
    );
    md = md.replace(
      /[\#]{4}(.+)/g,
      `<span style='color: var(--contentsContentMarkdownHFontColor);'>####$1</span>`
    );
    md = md.replace(
      /[\#]{3}(.+)/g,
      `<span style='color: var(--contentsContentMarkdownHFontColor);'>###$1</span>`
    );
    md = md.replace(
      /[\#]{2}(.+)/g,
      `<span style='color: var(--contentsContentMarkdownHFontColor);'>##$1</span>`
    );
    md = md.replace(
      /[\#]{1}(.+)/g,
      `<span style='color: var(--contentsContentMarkdownHFontColor);'>#$1</span>`
    );

    //alt h
    md = md.replace(
      /^(.+)\n\=+/gm,
      `<span style='color: var(--contentsContentMarkdownHFontColor);'>#$1</span>`
    );
    md = md.replace(
      /^(.+)\n\-+/gm,
      `<span style='color: var(--contentsContentMarkdownHFontColor);'>##$1</span>`
    );

    //images
    md = md.replace(
      /\!\[([^\]]+)\]\(([^\)]+)\)/g,
      `![<span style="color: var(--contentsContentMarkdownImgFontColor)">$1</span>](<span style="color: var(--contentsContentMarkdownLinkFontColor);">$2</span>)`
    );

    //p
    md = md.replace(/^\s*(\n)?(.+)/gm, function (m) {
      return /\<(\/)?(h\d|ul|ol|li|blockquote|pre|img)/.test(m)
        ? m
        : `<span style="color: var(--contentsContentMarkdownPFontColor);">${m}</span>`;
    });

    return md;
  };

  const minimap = props.currentTab?.content
    .split("\n")
    .map((lineContent: string, index: number) => {
      return <div dangerouslySetInnerHTML={{ __html: parseMd(lineContent) }} />;
    });

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
          <span
            onClick={() => onViewMode(0)}
            title="Show Source"
            className="codicon-go-to-file"
          />
          <span
            onClick={() => onViewMode(1)}
            title="Open Preview to the Side"
            className="codicon-open-preview"
          />
          <span
            onClick={() => onViewMode(2)}
            title="Show Preview"
            className="codicon-file-media"
          />
        </div>
      </div>
      <div
        className="flex content-wrapper"
        style={{ height: "calc(100% - 65px)" }}
      >
        <div
          className={`content h-full absolute ${viewMode === 0 ? `w-full`: `w-1/2`} ${viewMode === 2 ? `hidden`: `block`}`}
          ref={leftContent}
        >
          <div className="w-full">
            <div style={{ width: "calc(100% - 60px)" }}>
              <ReactScrollWheelHandler
                upHandler={() => onScroll("left")}
                downHandler={() => onScroll("left")}
                timeout={0}
                style={{
                  outline: "none",
                }}
              >
                {props.currentTab?.content
                  .split("\n")
                  .map((lineContent: string, index: number) => {
                    return (
                      <div>
                        {index === 0 && (
                          <div
                            style={{
                              width: "60px",
                              height: "100px",
                              position: "absolute",
                              top: "65px",
                              right: `calc(${
                                viewMode === 1 ? `50%` : `0%`
                              } + 10px)`,
                            }}
                          >
                            <Minimap of={minimap} width={60} height={100} />
                          </div>
                        )}
                        <div className="flex">
                          <div className="line-number flex justify-end">
                            {index + 1}
                          </div>
                          <div className="line-content select-text">
                            <div
                              dangerouslySetInnerHTML={{
                                __html: parseMd(lineContent),
                              }}
                            />
                          </div>
                        </div>
                      </div>
                    );
                  })}
              </ReactScrollWheelHandler>
            </div>
          </div>
        </div>
        <div
          className="content-preview h-full"
          style={{
            width: viewMode === 2 ? "100%" : "50%",
            display: viewMode === 0 ? "none" : "block",
          }}
          ref={rightContent}
        >
          <ReactScrollWheelHandler
            upHandler={() => onScroll("right")}
            downHandler={() => onScroll("right")}
            timeout={0}
            style={{
              outline: "none",
            }}
          >
            <article className="prose" style={{ maxWidth: "100%" }}>
              <ReactMarkdown allowDangerousHtml>
                {props.currentTab?.content}
              </ReactMarkdown>
            </article>
          </ReactScrollWheelHandler>
        </div>
      </div>
    </div>
  );
};
