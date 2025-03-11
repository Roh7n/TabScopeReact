import Header from "./components/Header";
import CoreConcepts from "./components/CoreConcepts";
import { CORE_CONCEPTS } from "./data";
import TabButton from "./components/TabButton";
import { useState } from "react";
import { EXAMPLES } from "./data";

function App() {
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
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcepts
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image}
            />
            <CoreConcepts {...CORE_CONCEPTS[1]} />
            <CoreConcepts {...CORE_CONCEPTS[2]} />
            <CoreConcepts {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton
              onSelect={() => {
                handleClick("components");
              }}
            >
              Components
            </TabButton>
            <TabButton
              onSelect={() => {
                handleClick("jsx");
              }}
            >
              JSX
            </TabButton>
            <TabButton
              onSelect={() => {
                handleClick("props");
              }}
            >
              Props
            </TabButton>
            <TabButton
              onSelect={() => {
                handleClick("state");
              }}
            >
              State
            </TabButton>
          </menu>
          {tabContent}
        </section>
      </main>
    </div>
  );
}

export default App;
