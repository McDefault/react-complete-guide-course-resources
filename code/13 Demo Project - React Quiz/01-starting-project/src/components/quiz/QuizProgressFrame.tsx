import {useContext} from "react";
import Question from "./Question.tsx";
import Summary from "./Summary.tsx";
import {QuizProgressContext} from "../../store/quiz-progress-context.tsx";

export default function QuizProgressFrame() {

    const {items, quiz} = useContext(QuizProgressContext)

    //derived state - computed value
    const QUESTIONS = quiz.questions;
    const activeQuestionIndex = items.length;
    const quizIsCompleted = activeQuestionIndex === QUESTIONS.length; //derived state

    if (quizIsCompleted) {
        return (
            <Summary/>
        )
    }

    //separate return for readability
    return (
        <div id={"quiz"}>
            <Question
                key={activeQuestionIndex} //force component rerender with key property and updating state variable
            />
        </div>
    )
}