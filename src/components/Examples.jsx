import TabButton from "./TabButton";
import { useState } from "react";
import { EXAMPLES } from "../data";

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
    <section id="examples">
      <h2>Examples</h2>
      <menu>
        <TabButton
          isSelected={selectedTab === "components"}
          onSelect={() => {
            handleClick("components");
          }}
        >
          Components
        </TabButton>
        <TabButton
          isSelected={selectedTab === "jsx"}
          onSelect={() => {
            handleClick("jsx");
          }}
        >
          JSX
        </TabButton>
        <TabButton
          isSelected={selectedTab === "props"}
          onSelect={() => {
            handleClick("props");
          }}
        >
          Props
        </TabButton>
        <TabButton
          isSelected={selectedTab === "state"}
          onSelect={() => {
            handleClick("state");
          }}
        >
          State
        </TabButton>
      </menu>
      {tabContent}
    </section>
  );
}
