import TabButton from "./TabButton";
import { useState } from "react";
import { EXAMPLES } from "../data";
import Section from "./Section";

export default function Examples() {
  const [selectedTab, setSelectedTab] = useState();

  function handleClick(selectedButton) {
    setSelectedTab(selectedButton);
    console.log(selectedTab);
  }

  let tabContent = "Please select a topic";

  if (selectedTab) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTab].title}</h3>
        <p>{EXAMPLES[selectedTab].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTab].code}</code>
        </pre>
      </div>
    );
  }
  return (
    <Section id="examples">
      <menu>
        <TabButton
          isSelected={selectedTab === "components"}
          onClick={() => {
            handleClick("components");
          }}
        >
          Components
        </TabButton>
        <TabButton
          isSelected={selectedTab === "jsx"}
          onClick={() => {
            handleClick("jsx");
          }}
        >
          JSX
        </TabButton>
        <TabButton
          isSelected={selectedTab === "props"}
          onClick={() => {
            handleClick("props");
          }}
        >
          Props
        </TabButton>
        <TabButton
          isSelected={selectedTab === "state"}
          onClick={() => {
            handleClick("state");
          }}
        >
          State
        </TabButton>
      </menu>
      {tabContent}
    </Section>
  );
}
