import Quiz from "./components/quiz/Quiz.tsx";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Dashboard from "./components/Dashboard.tsx";
import RouterRoot from "./components/RouterRoot.tsx";
import Error from "./components/Error.tsx";
import AuthenticationPage, {authAction} from "./components/auth/Authentication.tsx";
import EventsRootLayout from "./components/event/EventsRoot.tsx";
import EventsPage, {EventsPageLoader} from "./components/event/Events.tsx";
import EventDetailPage, {EventDetailsLoader, EventsDeleteAction} from "./components/event/EventDetail.tsx";
import NewEventPage from "./components/event/NewEvent.tsx";
import EditEventPage from "./components/event/EditEvent.tsx";
import QuizzesRootLayout from "./components/quiz/QuizzesRoot.tsx";
import QuizzesPage, {QuizzesPageLoader} from "./components/quiz/Quizzes.tsx";
import QuizDetailPage, {QuizDeleteAction, QuizDetailsLoader} from "./components/quiz/QuizDetail.tsx";
import EditQuizPage from "./components/quiz/EditQuiz.tsx";
import NewQuizPage from "./components/quiz/NewQuiz.tsx";
import {NewAndEditEventAction} from "./components/event/EventForm.tsx";
import {NewEditQuizAction} from "./components/quiz/QuizForm.tsx";
import NewsletterPage, {newsletterAction} from "./components/newsletter/Newsletter.tsx";
import {logoutAction} from "./components/auth/Logout.tsx";
import {checkAuthLoader, tokenLoader} from './util/auth.ts';

export const ROUTE_IDS = {
    root: "root",
    eventsPage: "events-page",
    eventDetail: "event-detail",
    quizzesPage: "quizzes-page",
    quizDetail: "quiz-detail",
} as const;

// Routing paths
const router = createBrowserRouter([
    {
        path: "/",
        element: <RouterRoot/>,
        errorElement: <Error/>,
        id: ROUTE_IDS.root,
        loader: tokenLoader,
        children: [
            {index: true, element: <Dashboard/>}, //path: ""
            {
                path: "auth", element: <AuthenticationPage/>,
                action: authAction
            },
            {
                path: 'events',
                element: <EventsRootLayout/>,
                children: [
                    {
                        index: true,
                        element: <EventsPage/>,
                        id: ROUTE_IDS.eventsPage,
                        loader: EventsPageLoader
                    },
                    {
                        path: ':eventId',
                        id: ROUTE_IDS.eventDetail,
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
                                action: NewAndEditEventAction,
                                loader: checkAuthLoader
                            },
                        ]
                    },
                    {
                        path: 'new',
                        element: <NewEventPage/>,
                        action: NewAndEditEventAction,
                        loader: checkAuthLoader
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
                        id: ROUTE_IDS.quizzesPage,
                        loader: QuizzesPageLoader
                    },
                    {
                        path: ':quizId',
                        id: ROUTE_IDS.quizDetail,
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
                                action: NewEditQuizAction,
                                loader: checkAuthLoader
                            },
                        ]
                    },
                    {
                        path: 'new',
                        element: <NewQuizPage/>,
                        action: NewEditQuizAction,
                        loader: checkAuthLoader
                    },
                ],
            },
            {
                path: 'newsletter',
                element: <NewsletterPage/>,
                action: newsletterAction,
            },
            {
                path: "logout",
                action: logoutAction
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