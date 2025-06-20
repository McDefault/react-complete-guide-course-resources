import {useCallback, useState} from "react";

import QUESTIONS from '../questions.js';
import completeImg from '../assets/quiz-complete.png';
import QuestionTimer from "./QuestionTimer.jsx";

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
    }, []);

    const handelSkipAnswer = useCallback(() => handleClickAnswer(null), [handleClickAnswer]);

    if (quizIsCompleted) {
        return <div id={"summary"}>
            <img src={completeImg} alt="completed icon"/>
            <h2>Quiz Completed!</h2>
        </div>;
    }

    const shuffledAnswers = [...QUESTIONS[activeQuestionIndex].answers]; //create new array reference copy in memory from original reference
    shuffledAnswers.sort(() => Math.random() - 0.5); //sort alters original reference

    return (
        <div id={"quiz"}>
            <div id={"question"}>
                <QuestionTimer
                    key={activeQuestionIndex} //force component rerender with key property and updating state variable
                    timeout={10000}
                    onTimeout={handelSkipAnswer}
                ></QuestionTimer>
                <h2>
                    {QUESTIONS[activeQuestionIndex].text}
                </h2>
                <ul id={"answers"}>
                    {shuffledAnswers.map((answer) => (<li key={answer} className={"answer"}>
                        <button onClick={() => handleClickAnswer(answer)}>{answer}</button>
                    </li>))}
                </ul>
            </div>
        </div>
    )
}
