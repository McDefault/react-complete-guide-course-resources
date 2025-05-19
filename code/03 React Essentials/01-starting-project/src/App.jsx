import {CORE_CONCEPTS, EXAMPLES} from './data.js';
import Header from './components/Header/Header.jsx';
import CoreConcept from "./components/CoreConcepts.jsx";
import TabButton from "./components/TabButton";
import {useState} from "react";

function App() {
    const tabContent = null;

    const [
        selectedTopic,         // Current state value
        setSelectedTopic       // Function to update statue value, re-execute component
    ] = useState(tabContent);  // Initial state value

    function handleSelectClick(selectedButton) {
        // button.children  => 'components', 'jsx', 'props', 'state'
        setSelectedTopic(selectedButton);
        console.log(selectedTopic)
    }

    let tabHTMLContent = <p>Please select a topic.</p>;

    if (selectedTopic) {
        tabHTMLContent = (
            <div id="tab-content">
                <h3>
                    {EXAMPLES[selectedTopic].title}
                </h3>
                <p>
                    {EXAMPLES[selectedTopic].description}
                </p>
                <pre>
                    <code>
                        {EXAMPLES[selectedTopic].code}
                    </code>
                </pre>
            </div>
        );
    }

    return (
        <div>
            <Header/>
            <main>
                <section id="core-concepts">
                    <h2>Time to get started!</h2>
                    <ul>
                        <CoreConcept
                            title={CORE_CONCEPTS[0].title}
                            description={CORE_CONCEPTS[0].description}
                            image={CORE_CONCEPTS[0].image}
                        />
                        <CoreConcept {...CORE_CONCEPTS[1]} />
                        <CoreConcept {...CORE_CONCEPTS[2]} />
                        <CoreConcept {...CORE_CONCEPTS[3]} />
                    </ul>
                </section>
                <section id="examples">
                    <h2>Examples</h2>
                    <menu>
                        <TabButton isSelected={selectedTopic === 'components'} onClick={() => handleSelectClick('components')}>Components</TabButton>
                        <TabButton isSelected={selectedTopic === 'jsx'} onClick={() => handleSelectClick('jsx')}>JSX</TabButton>
                        <TabButton isSelected={selectedTopic === 'props'} onClick={() => handleSelectClick('props')}>Props</TabButton>
                        <TabButton isSelected={selectedTopic === 'state'} onClick={() => handleSelectClick('state')}>State</TabButton>
                    </menu>
                    {tabHTMLContent}
                </section>
            </main>
        </div>
    );
}

export default App;
