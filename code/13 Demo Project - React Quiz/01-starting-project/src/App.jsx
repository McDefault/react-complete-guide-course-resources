import Quiz from "./components/Quiz.jsx";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Dashboard from "./components/Dashboard.jsx";
import RouterRoot from "./components/RouterRoot.jsx";
import Error from "./components/Error.jsx";
import AuthenticationPage from "./components/Authentication.jsx";

// Routing paths
const router = createBrowserRouter([
    {
        path: "/",
        element: <RouterRoot/>,
        errorElement: <Error/>,
        children: [
            {index: true, element: <Dashboard/>}, //path: ""
            {path: "quiz", element: <Quiz/>},
            {path: "auth", element: <AuthenticationPage/> },
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