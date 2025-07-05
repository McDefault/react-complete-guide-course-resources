import Quiz from "./components/quiz/Quiz.jsx";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Dashboard from "./components/Dashboard.jsx";
import RouterRoot from "./components/RouterRoot.jsx";
import Error from "./components/Error.jsx";
import AuthenticationPage from "./components/auth/Authentication.jsx";
import EventsRootLayout from "./components/event/EventsRoot.jsx";
import EventsPage, {EventsPageLoader} from "./components/event/Events.jsx";
import EventDetailPage, {EventDetailsLoader, EventsDeleteAction} from "./components/event/EventDetail.jsx";
import NewEventPage from "./components/event/NewEvent.jsx";
import EditEventPage from "./components/event/EditEvent.jsx";
import QuizzesRootLayout from "./components/quiz/QuizzesRoot.jsx";
import QuizzesPage, {QuizzesPageLoader} from "./components/quiz/Quizzes.jsx";
import QuizDetailPage, {QuizDeleteAction, QuizDetailsLoader} from "./components/quiz/QuizDetail.jsx";
import EditQuizPage from "./components/quiz/EditQuiz.jsx";
import NewQuizPage from "./components/quiz/NewQuiz.jsx";
import {NewAndEditEventAction} from "./components/event/EventForm.jsx";
import {NewEditQuizAction} from "./components/quiz/QuizForm.jsx";
import NewsletterPage, {newsletterAction} from "./components/newsletter/Newsletter.jsx";

// Routing paths
const router = createBrowserRouter([
    {
        path: "/",
        element: <RouterRoot/>,
        errorElement: <Error/>,
        children: [
            {index: true, element: <Dashboard/>}, //path: ""
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
            {
                path: 'newsletter',
                element: <NewsletterPage/>,
                action: newsletterAction,
            }
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