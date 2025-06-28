import Header from './components/Header.jsx';
import Quiz from "./components/Quiz.jsx";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Dashboard from "./components/Dashboard.jsx";

// Routing paths
const router = createBrowserRouter([
    {path: "/", element: <Dashboard/>},
    {path: "/quiz", element: <Quiz/>},
])

function App() {
    return (
        <>
            <Header></Header>
            <main>
                <RouterProvider router={router}/>
            </main>
        </>
    )
}

export default App;
