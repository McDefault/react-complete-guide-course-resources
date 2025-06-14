import {useState} from "react";

import QUESTIONS from '../questions.js';

export default function Quiz() {
    const [userAnswers, setUserAnswers] = useState([]);
    //derived state - computed value
    const activeQuestionIndex = userAnswers.length;
    const shuffledAnswers = [...QUESTIONS[activeQuestionIndex].answers]; //create new array reference copy in memory from original reference
    shuffledAnswers.sort(() => Math.random() - 0.5); //sort alters original reference

    function handleClickAnswer(answer) {
        // use implicit parameter (previousUserAnswers) from the set method to inject old data from the state handler and append new data to it
        setUserAnswers((previousUserAnswers) => [...previousUserAnswers, answer]);

        // setUserAnswers((previousUserAnswers) => {
        //     return [...previousUserAnswers, answer]
        // });
    }

    return (<div id={"quiz"}>
            <div id={"question"}>
                <h2>
                    {QUESTIONS[activeQuestionIndex].text}
                </h2>
                <ul id={"answers"}>
                    {shuffledAnswers.map((answer) => (<li key={answer} className={"answer"}>
                            <button onClick={() => handleClickAnswer(answer)}>{answer}</button>
                        </li>))}
                </ul>
            </div>
        </div>)
}
