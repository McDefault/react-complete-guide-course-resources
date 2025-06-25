import {useCallback, useState} from "react";

import QUESTIONS from '../questions.js';
import completeImg from '../assets/quiz-complete.png';
import Question from "./Question.jsx";

export default function Quiz() {
    const [userAnswers, setUserAnswers] = useState([]);
    //derived state - computed value
    const activeQuestionIndex = userAnswers.length;
    const quizIsCompleted = activeQuestionIndex === QUESTIONS.length; //derived state

    const handleClickAnswer = useCallback(function handleClickAnswer(answer) { // useCallback hook to not recreate function on component update
        // use implicit parameter (previousUserAnswers) from the set method to inject old data from the state handler and append new data to it
        setUserAnswers((previousUserAnswers) => [...previousUserAnswers, answer]);

        // setUserAnswers((previousUserAnswers) => {
        //     return [...previousUserAnswers, answer]
        // });

    }, []); // handleClickAnswer should be recreated with new value because we don't want to use outdated activeQuestionIndex in the body

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
                index={activeQuestionIndex} //key is reserved for react
                onSelectAnswer={handleClickAnswer}
                onSkipAnswer={handelSkipAnswer}
            />
        </div>
    )
}
