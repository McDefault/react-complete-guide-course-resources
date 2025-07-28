import {useCallback, useState} from "react";

// import QUESTIONS from '../questions.js';
import Question from "./Question.tsx";
import Summary from "./Summary.tsx";
import {useRouteLoaderData} from "react-router-dom";

export default function Quiz() {
    const loaderData = useRouteLoaderData ('quiz-detail');
    const QUESTIONS = loaderData.quiz.questions;

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
        return <Summary userAnswers={userAnswers} />
    }

    return (
        <div id={"quiz"}>
            <Question
                key={activeQuestionIndex} //force component rerender with key property and updating state variable
                index={activeQuestionIndex} //key is reserved for react
                onSelectAnswer={handleClickAnswer}
                onSkipAnswer={handelSkipAnswer}
                QUESTIONS={QUESTIONS}
            />
        </div>
    )
}
