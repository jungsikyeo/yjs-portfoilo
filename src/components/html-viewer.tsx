import React from "react";

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
          {props.currentTab?.projects?.length > 0 &&
            props.currentTab?.projects[0]?.screenshot?.length > 0 &&
            props.currentTab?.projects[0]?.screenshot.map((img: any) => (
              <div className="w-full flex justify-center mb-10">
                <img
                  src={`http://152.67.198.254:1337${img.url}`}
                  alt={`${img.name}`}
                  width="640"
                  className="rounded-xl"
                />
              </div>
            ))}
        </article>
      </div>
    </div>
  );
};
