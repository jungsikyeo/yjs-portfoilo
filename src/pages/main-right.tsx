import React, { useState } from "react";
import Tabs, { Tab } from "./tabs";
import "../styles/theme.css";
import "../styles/react-tabs.scss";

export const MainRight = () => {
  const [activeTab, handleTabSwitch] = useState(0);
  const tabs: any[] = [];
  const handleTabPositionChange = (a: number, b: number) => {
    let c = tabs[a];
    tabs[a] = tabs[b];
    tabs[b] = c;

    if (activeTab === a) {
      handleTabSwitch(b);
    } else if (activeTab === b) {
      handleTabSwitch(a);
    }
  };
  return (
    <div
      className="h-full absolute whitespace-normal"
      style={{
        left: "348px",
        width: "calc(100% - 348px)",
        background: "var(--mainRightBackground)",
        zIndex: 100,
      }}
    >
      <Tabs
        active={activeTab}
        onTabSwitch={handleTabSwitch}
        onTabPositionChange={handleTabPositionChange}
        draggable={true}
      >
        <Tab key="0" title="tab1">foo</Tab>
        <Tab key="1" title="tab2">bar</Tab>
        <Tab key="2" title="tab3">baz</Tab>
      </Tabs>
    </div>
  );
};
