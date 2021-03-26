import React from "react";

export const JsonViewer = (props: any) => {
  const jsonContent = props.currentTab?.content;
  const json = jsonContent.split("\n").map((lineContent: string) => {
    return lineContent;
  });

  return (
    <div className="json-viewer">
      <div dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }} />
    </div>
  );
};
