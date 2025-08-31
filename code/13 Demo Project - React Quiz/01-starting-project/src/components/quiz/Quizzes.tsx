import QuizzesList from "./QuizzesList.tsx";
import {getAllQuizzes} from "../../util/http.ts";
import {useQuizzesPageLoader} from "../../hooks/useQuizzesPageLoader.ts";
import {QuizzesPageLoaderType} from "../../models/loaders/QuizzesPageLoaderType.ts";

function QuizzesPage() {
    // const {fetchQuizzes} = useLoaderData();
    const {fetchQuizzes} = useQuizzesPageLoader();

    return (
        <QuizzesList quizzes={fetchQuizzes}/>
    );
}

export default QuizzesPage;

export async function QuizzesPageLoader(): Promise<QuizzesPageLoaderType> {
    return {
        fetchQuizzes: await getAllQuizzes(),
    }
}