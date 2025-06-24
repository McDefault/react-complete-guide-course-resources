import {useCallback, useState} from "react";

import QUESTIONS from '../questions.js';
import completeImg from '../assets/quiz-complete.png';
import Question from "./Question.jsx";

export default function Quiz() {
    const [answerState, setAnswerState] = useState('')
    const [userAnswers, setUserAnswers] = useState([]);
    //derived state - computed value
    const activeQuestionIndex = answerState === '' ? userAnswers.length : userAnswers.length - 1;
    const quizIsCompleted = activeQuestionIndex === QUESTIONS.length; //derived state

    const handleClickAnswer = useCallback(function handleClickAnswer(answer) { // useCallback hook to not recreate function on component update
        setAnswerState('answered')
        // use implicit parameter (previousUserAnswers) from the set method to inject old data from the state handler and append new data to it
        setUserAnswers((previousUserAnswers) => [...previousUserAnswers, answer]);

        // setUserAnswers((previousUserAnswers) => {
        //     return [...previousUserAnswers, answer]
        // });

        setTimeout(() => {
            if (answer === QUESTIONS[activeQuestionIndex].answers[0]) {
                setAnswerState('correct');
            } else {
                setAnswerState('wrong');
            }

            setTimeout(() => {
                setAnswerState('');
            }, 2000);
        }, 1000);
    }, [activeQuestionIndex]); // handleClickAnswer should be recreated with new value because we don't want to use outdated activeQuestionIndex in the body

    const handelSkipAnswer = useCallback(() => handleClickAnswer(null), [handleClickAnswer]);

    if (quizIsCompleted) {
        return <div id={"summary"}>
            <img src={completeImg} alt="completed icon"/>
            <h2>Quiz Completed!</h2>
        </div>;
    }


    return (
        <div id={"quiz"}>
            <Question
                key={activeQuestionIndex} //force component rerender with key property and updating state variable
                QuestionText={QUESTIONS[activeQuestionIndex].text}
                answers={QUESTIONS[activeQuestionIndex].answers}
                answerState={answerState}
                selectedAnswer={userAnswers[userAnswers.length - 1]}
                onSelectAnswer={handleClickAnswer}
                onSkipAnswer={handelSkipAnswer}
            />
        </div>
    )
}
