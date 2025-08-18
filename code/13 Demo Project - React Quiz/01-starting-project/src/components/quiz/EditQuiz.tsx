import QuizForm from "./QuizForm.tsx";
import QuizProgressProvider from "../../store/quiz-progress-context.tsx";

function EditQuizPage() {
    return (
        <QuizProgressProvider>
            <QuizForm method={"patch"}/>
        </QuizProgressProvider>
    )

}

export default EditQuizPage;
