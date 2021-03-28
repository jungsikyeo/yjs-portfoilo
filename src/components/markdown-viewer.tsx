import React from "react";
import ReactScrollWheelHandler from "./ReactScrollWheelHandler";
import Minimap from "./minimap";
import ReactMarkdown from "react-markdown";
import {isMobile} from "react-device-detect";

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

export const MarkdownViewer = (props: any) => {
  const minimap = props.currentTab?.content
    .split("\n")
    .map((lineContent: string, index: number) => {
      return <div dangerouslySetInnerHTML={{ __html: parseMd(lineContent) }} />;
    });

  return (
    <div className="content-wrapper">
      <div
        className={`content h-full absolute py-3 left-0 ${
          props.viewMode === 0
            ? `w-full z-20`
            : props.viewMode === 2
            ? `w-0 z-10`
            : `w-1/2 z-10 border-r`
        }`}
        ref={props.leftContent}
      >
        <div className="w-full">
          <div style={{ width: "calc(100% - 60px)" }}>
            <ReactScrollWheelHandler
              upHandler={() => props.onScroll("left")}
              downHandler={() => props.onScroll("left")}
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
                            top: "0",
                            right: "10px",
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
        className={`content-preview absolute right-0 h-full ${
          props.viewMode === 2
            ? `w-full z-20 ${isMobile ? `p-5` : `px-20 py-10`}`
            : props.viewMode === 0
            ? `w-0 z-10 border-l`
            : `w-1/2 z-10 border-l ${isMobile ? `p-5` : `p-10`}`
        }`}
        ref={props.rightContent}
      >
        <ReactScrollWheelHandler
          upHandler={() => props.onScroll("right")}
          downHandler={() => props.onScroll("right")}
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
  );
};
