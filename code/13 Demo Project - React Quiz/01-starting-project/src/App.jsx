import Quiz from "./components/Quiz.jsx";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Dashboard from "./components/Dashboard.jsx";
import RouterRoot from "./components/RouterRoot.jsx";
import Error from "./components/Error.jsx";
import AuthenticationPage from "./components/Authentication.jsx";
import EventsRootLayout from "./components/EventsRoot.jsx";
import EventsPage, {EventsPageLoader} from "./components/Events.jsx";
import EventDetailPage, {EventDetailsLoader, EventsDeleteAction} from "./components/EventDetail.jsx";
import NewEventPage from "./components/NewEvent.jsx";
import EditEventPage from "./components/EditEvent.jsx";
import QuizzesRootLayout from "./components/QuizzesRoot.jsx";
import QuizzesPage, {QuizzesPageLoader} from "./components/Quizzes.jsx";
import QuizDetailPage, {QuizDeleteAction, QuizDetailsLoader} from "./components/QuizDetail.jsx";
import EditQuizPage from "./components/EditQuiz.jsx";
import NewQuizPage from "./components/NewQuiz.jsx";
import {NewAndEditEventAction} from "./components/EventForm.jsx";
import {NewEditQuizAction} from "./components/QuizForm.jsx";

// Routing paths
const router = createBrowserRouter([
    {
        path: "/",
        element: <RouterRoot/>,
        errorElement: <Error/>,
        children: [
            {index: true, element: <Dashboard/>}, //path: ""
            // {path: "quiz", element: <Quiz/>},
            {path: "auth", element: <AuthenticationPage/>},
            {
                path: 'events',
                element: <EventsRootLayout/>,
                children: [
                    {
                        index: true,
                        element: <EventsPage/>,
                        loader: EventsPageLoader
                    },
                    {
                        path: ':eventId',
                        id: 'event-detail',
                        loader: EventDetailsLoader,
                        children: [
                            {
                                index: true,
                                element: <EventDetailPage/>,
                                action: EventsDeleteAction

                            },
                            {
                                path: 'edit',
                                element: <EditEventPage/>,
                                action: NewAndEditEventAction
                            },
                        ]
                    },
                    {
                        path: 'new',
                        element: <NewEventPage/>,
                        action: NewAndEditEventAction
                    },
                ],
            },
            {
                path: 'quiz',
                element: <QuizzesRootLayout/>,
                children: [
                    {
                        index: true,
                        element: <QuizzesPage/>,
                        loader: QuizzesPageLoader
                    },
                    {
                        path: ':quizId',
                        id: 'quiz-detail',
                        loader: QuizDetailsLoader,
                        children: [
                            {
                                index: true,
                                element: <QuizDetailPage/>,
                                action: QuizDeleteAction
                            },
                            {path: 'start', element: <Quiz/>},
                            {
                                path: 'edit',
                                element: <EditQuizPage/>,
                                action: NewEditQuizAction
                            },
                        ]
                    },
                    {
                        path: 'new',
                        element: <NewQuizPage/>,
                        action: NewEditQuizAction
                    },
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