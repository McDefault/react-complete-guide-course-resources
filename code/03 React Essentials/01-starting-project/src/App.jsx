import {CORE_CONCEPTS} from './data.js';
import Header from './components/Header/Header.jsx';
import CoreConcept from "./components/CoreConcepts.jsx";
import TabButton from "./components/TabButton";

function handleSelectClick() {
    console.log(1)
}

function App() {
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
                        <TabButton onClick={handleSelectClick}>Components</TabButton>
                        <TabButton onClick={handleSelectClick}>JSX</TabButton>
                        <TabButton onClick={handleSelectClick}>Props</TabButton>
                        <TabButton onClick={handleSelectClick}>State</TabButton>
                    </menu>
                </section>
                Dynamic Content
            </main>
        </div>
    );
}

export default App;
