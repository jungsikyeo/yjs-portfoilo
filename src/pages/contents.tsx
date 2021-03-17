import React, { useState } from "react";
import Tabs, { Tab } from "./tabs";
import "../styles/theme.css";
import "../styles/contents.css";
import "../styles/react-tabs.scss";

export const Contents = () => {
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
  const handleTabClose = (index: number) => {
    tabs.splice(index, 1);

    if (activeTab >= tabs.length) {
      handleTabSwitch(tabs.length - 1);
    }
  };
  return (
    <div
      className="contents-container absolute whitespace-normal"
    >
      <div>
        <Tabs
          active={activeTab}
          onTabSwitch={handleTabSwitch}
          onTabPositionChange={handleTabPositionChange}
          onTabClose={handleTabClose}
          draggable={true}
        >
          <Tab icon="loading" title="Loading" showClose={true}>
            foo
          </Tab>
          <Tab icon="warning" title="Warning" showClose={true}>
            bar
          </Tab>
          <Tab icon={<span>[T]&nbsp;</span>} title="Tab3" showClose={true}>
            baz
          </Tab>
        </Tabs>
      </div>
    </div>
  );
};
