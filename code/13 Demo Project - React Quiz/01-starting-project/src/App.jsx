import Quiz from "./components/Quiz.jsx";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Dashboard from "./components/Dashboard.jsx";
import RouterRoot from "./components/RouterRoot.jsx";
import Error from "./components/Error.jsx";
import AuthenticationPage from "./components/Authentication.jsx";
import EventsRootLayout from "./components/EventsRoot.jsx";
import EventsPage from "./components/Events.jsx";
import EventDetailPage from "./components/EventDetail.jsx";
import NewEventPage from "./components/NewEvent.jsx";
import EditEventPage from "./components/EditEvent.jsx";

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
            {
                path: 'events',
                element: <EventsRootLayout />,
                children: [
                    { index: true, element: <EventsPage /> },
                    { path: ':eventId', element: <EventDetailPage /> },
                    { path: 'new', element: <NewEventPage /> },
                    { path: ':eventId/edit', element: <EditEventPage /> },
                ],
            },
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