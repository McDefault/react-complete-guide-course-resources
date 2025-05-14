import reactImg from './assets/react-core-concepts.png';
import componentsImg from './assets/components.png';

const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];

function genRandomInt(max) {
    return Math.floor(Math.random() * (max + 1));
}

function Header() {
    const dynamic_description = reactDescriptions[genRandomInt(2)];
    return (
        <header>
            <img src={reactImg} alt="Stylized atom"/>
            <h1>React Essentials</h1>
            <p>
                {dynamic_description} React concepts you will need for almost any app you are
                going to build!
            </p>
        </header>
    )
}

function CoreConcept({img, title, description}) {
    return (
        <li>
            <img src={img} alt=""/>
            <h3>{title}</h3>
            <p>{description}</p>
        </li>
    )
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
                            title="Components"
                            description="The Core UI building block"
                            img={componentsImg}
                        />
                        <CoreConcept
                            title="Props"
                        />
                        <CoreConcept
                            title="Props"
                        />
                        <CoreConcept
                            title="Props"
                        />
                    </ul>
                </section>
            </main>
        </div>
    );
}

export default App;
