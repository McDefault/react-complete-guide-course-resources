import Quiz from "./components/Quiz.jsx";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Dashboard from "./components/Dashboard.jsx";
import RouterRoot from "./components/RouterRoot.jsx";

// Routing paths
const router = createBrowserRouter([
    {
        path: "/",
        element: <RouterRoot/>,
        children: [
            {path: "/", element: <Dashboard/>},
            {path: "/quiz", element: <Quiz/>},
        ]
    },
])

function App() {
    return (
        <>
            <main>
                <RouterProvider router={router}/>
            </main>
        </>
    )
}

export default App;