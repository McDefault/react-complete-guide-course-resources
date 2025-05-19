import {CORE_CONCEPTS} from './data.js';
import Header from './components/Header/Header.jsx';
import CoreConcept from "./components/CoreConcepts.jsx";
import TabButton from "./components/TabButton";
import {useState} from "react";

function App() {
    const tabContent = 'Please click a button.'

    const [
        selectedTopic,   // Current state value
        setSelectedTopic       // Function to update statue value, re-execute component
    ] = useState(tabContent);  // Initial state value

    function handleSelectClick(selectedButton) {
        // button.children  => 'components', 'jsx', 'props', 'state'
        setSelectedTopic(selectedButton);
        console.log(selectedTopic)
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
                        <TabButton onClick={() => handleSelectClick('components')}>Components</TabButton>
                        <TabButton onClick={() => handleSelectClick('jsx')}>JSX</TabButton>
                        <TabButton onClick={() => handleSelectClick('props')}>Props</TabButton>
                        <TabButton onClick={() => handleSelectClick('state')}>State</TabButton>
                    </menu>
                    {selectedTopic}
                </section>
            </main>
        </div>
    );
}

export default App;
