import {redirect} from 'react-router-dom';
import QuizItem from "./QuizItem.tsx";
import QuizProgressProvider from "../../store/quiz-progress-context.tsx";
import {deleteQuizById, getQuizById} from "../../util/http.ts";
import {QuizDetailsLoaderType} from "../../models/QuizDetailsLoaderType.ts";

function QuizDetailPage() {
    return (
        <QuizProgressProvider>
            <QuizItem/>
        </QuizProgressProvider>
    );
}

export default QuizDetailPage;

export async function QuizDetailsLoader({params}): Promise<QuizDetailsLoaderType> {
    const id = params.quizId;
    return {
        fetchQuiz: await getQuizById(id),
    }
}

export async function QuizDeleteAction({params, request}) {
    const id = params.quizId;
    await deleteQuizById(id);
    return redirect('/quiz');
}