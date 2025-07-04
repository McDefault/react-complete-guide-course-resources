import {useRouteLoaderData} from 'react-router-dom';
import QuizItem from "./QuizItem.jsx";

function QuizDetailPage() {
    const loaderData = useRouteLoaderData('quiz-detail');
    return (
        <QuizItem quiz={loaderData.quiz}/>
    );
}

export default QuizDetailPage;

export async function QuizDetailsLoader({params}) {
    const id = params.quizId;
    const response = await fetch('http://localhost:8080/quizzes/' + id);

    if (!response.ok) {
        throw new Response(JSON.stringify({message: 'No quiz found.'}), {status: 500}); // Fallback to errorElement
    } else {
        return response;
    }
}