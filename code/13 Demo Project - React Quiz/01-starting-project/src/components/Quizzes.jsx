import {useLoaderData} from "react-router-dom";
import QuizzesList from "./QuizzesList.jsx";

function QuizzesPage() {
    const loaderData = useLoaderData();
    const fetchedQuizzes = loaderData.quizzes;
    return (
        <QuizzesList quizzes={fetchedQuizzes}/>
    );
}

export default QuizzesPage;

export async function QuizzesPageLoader() {
    const response = await fetch('http://localhost:8080/quizzes');

    if (!response.ok) {
        throw new Response(JSON.stringify({message: 'No quizzes found.'}), {status: 500}); // Fallback to errorElement
    } else {
        return response;
    }
}