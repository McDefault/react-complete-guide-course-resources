import {useLoaderData} from "react-router-dom";
import QuizzesList from "./QuizzesList.tsx";
import {getAllQuizzes} from "../../util/http.ts";

function QuizzesPage() {
    const loaderData = useLoaderData();
    const fetchedQuizzes = loaderData.quizzes;
    return (
        <QuizzesList quizzes={fetchedQuizzes}/>
    );
}

export default QuizzesPage;

export async function QuizzesPageLoader() {
    return {
        fetchQuizzes: await getAllQuizzes(),
    }
}