import React from "react";
import ReactMarkdown from "react-markdown";

export const HtmlViewer = (props: any) => {
  return (
    <div className="content-wrapper">
      <div className="content-preview w-full z-20 px-20 py-10">
        <article className="prose" style={{ maxWidth: "100%" }}>
          <div
            dangerouslySetInnerHTML={{
              __html:
                props.currentTab?.projects?.length > 0 &&
                props.currentTab?.projects[0].description,
            }}
          />
        </article>
      </div>
    </div>
  );
};
