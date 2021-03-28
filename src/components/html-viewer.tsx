import React from "react";
import { isMobile } from "react-device-detect";

export const HtmlViewer = (props: any) => {
    const themeName = document.getElementsByTagName("HTML").item(0)?.getAttribute("data-theme");
    if(props.currentTab?.title === "Timeline.html" && themeName === "light") {
        const pList:any = document.getElementsByTagName("article").item(0)?.getElementsByTagName("p");
        for(let i = 0; i < pList.length; i++) {
            pList[i].style.color = "white";
        }
    }
  return (
    <div className="content-wrapper">
      <div
        className={`content-preview w-full z-20 ${
          isMobile ? `p-5` : `px-20 py-10`
        }`}
      >
        <article className="prose max-w-full">
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
                  src={`https://strapi.yjsnas.synology.me${img.url}`}
                  alt={`${img.name}`}
                  width="850"
                  className="rounded-xl"
                />
              </div>
            ))}
        </article>
      </div>
    </div>
  );
};
