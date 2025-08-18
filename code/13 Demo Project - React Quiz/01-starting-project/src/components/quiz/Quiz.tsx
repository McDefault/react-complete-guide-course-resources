import QuizProgressProvider from "../../store/quiz-progress-context.tsx";
import QuizProgressFrame from "./QuizProgressFrame.tsx";

export default function Quiz() {
    return (
        <QuizProgressProvider>
            <QuizProgressFrame/>
        </QuizProgressProvider>
    )
}