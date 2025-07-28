import QuestionTimer from "./QuestionTimer.tsx";
import Answers from "./Answers.tsx";
import {useState} from "react";
// import QUESTIONS from '../questions.js';

export default function Question({index, onSelectAnswer, selectedAnswer, onSkipAnswer, QUESTIONS}) {
    const [answer, setAnswer] = useState(
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

    function handelSelectAnswer(answer) {
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

    let answerState = '';

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