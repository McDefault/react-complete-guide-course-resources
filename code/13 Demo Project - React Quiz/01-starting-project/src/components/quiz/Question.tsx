import QuestionTimer from "./QuestionTimer.tsx";
import Answers from "./Answers.tsx";
import {type FC, useState} from "react";
import type {AnswerStateValues} from "../../models/AnswerStateValues.ts";
import {useQuizProgressContext} from "../../hooks/useQuizProgressContext.ts";

type AnswerState = {
    selectedAnswer: string,
    isCorrect: boolean | null
}

// type QuestionProp = { //replaced all with context store provider QuizProgressContext
//     index: number,
//     onSelectAnswer: (answer: string) => void, //function type definition: (...parameters) => (return type)
//     onSkipAnswer: (answer: string) => void, //function type definition: (...parameters) => (return type)
//     QUESTIONS: QuestionType[],
// }

const Question: FC = () => {

    const {index, quiz, onSelectAnswer, onSkipAnswer} = useQuizProgressContext();

    const QUESTIONS = quiz.questions;
    const [answer, setAnswer] = useState<AnswerState>(
        {
            selectedAnswer: '',
            isCorrect: null
        }
    );

    let timer = 10000;
    const timerOnSelectedAnswer = 1000;
    const timerToNextQuestion = 2000;

    if (answer.selectedAnswer) {
        timer = timerOnSelectedAnswer;
    }

    if (answer.isCorrect !== null) {
        timer = timerToNextQuestion;
    }

    const handelSelectAnswer = (answer: string): void => {
        setAnswer({
            selectedAnswer: answer,
            isCorrect: null
        });

        setTimeout(() => {
            setAnswer({
                selectedAnswer: answer,
                isCorrect: QUESTIONS[index].answers[0] === answer // first answer is always the correct one
            });

            setTimeout(() => {
                onSelectAnswer(answer);
            },timerToNextQuestion)
        }, timerOnSelectedAnswer)
    }

    let answerState: AnswerStateValues = '';

    if (answer.selectedAnswer && answer.isCorrect !== null) {
        answerState = answer.isCorrect ? 'correct' : 'wrong';
    } else if (answer.selectedAnswer) {
        answerState = 'answered';
    }

    return (
        <div id={"question"}>
            <QuestionTimer
                key={timer} //rerender component when timer value changes
                timeout={timer}
                onTimeout={answer.selectedAnswer === '' ? onSkipAnswer : null} //only use when no answer
                mode={answerState}
            />
            <h2>
                {QUESTIONS[index].text}
            </h2>
            <Answers
                answers={QUESTIONS[index].answers}
                selectedAnswer={answer.selectedAnswer}
                answerState={answerState}
                onSelect={handelSelectAnswer}
            />
        </div>
    )
}

export default Question;