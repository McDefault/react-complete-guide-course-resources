import {useCallback, useState} from "react";

import Question from "./Question.tsx";
import Summary from "./Summary.tsx";
import {useRouteLoaderData} from "react-router-dom";
import {QuizProgressContext} from "../../store/quiz-progress-context.tsx";
import type {Question as QuestionType} from "../../models/Question.ts"

export default function Quiz() {
    const loaderData = useRouteLoaderData('quiz-detail');
    const QUESTIONS: QuestionType[] = loaderData.quiz.questions;

    type userAnswers = {
        items: string[]
    }

    const [userAnswers, setUserAnswers] = useState<userAnswers>({
        items: [],
    }); //start with empty array but eventually fill it

    //derived state - computed value
    const activeQuestionIndex = userAnswers.items.length;


    const handleClickAnswer = useCallback(function handleClickAnswer(answer: string) { // useCallback hook to not recreate function on component update
        // use implicit parameter (previousUserAnswers) from the set method to inject old data from the state handler and append new data to it
        // setUserAnswers((previousUserAnswers) => [...previousUserAnswers, answer]);

        setUserAnswers((previousUserAnswers) => {
            return {
                items: [...previousUserAnswers.items, answer]
            }
        });

    }, []); // handleClickAnswer should be recreated with new value because we don't want to use outdated activeQuestionIndex in the body

    const handelSkipAnswer = useCallback(() => handleClickAnswer(null), [handleClickAnswer]);

    const userAnswersContextValue = {
        items: userAnswers.items,
        index: activeQuestionIndex,
        QUESTIONS: QUESTIONS,
        onSelectAnswer: handleClickAnswer,
        onSkipAnswer: handelSkipAnswer,
    };

    const quizIsCompleted = activeQuestionIndex === QUESTIONS.length; //derived state

    if (quizIsCompleted) {
        return (
            <QuizProgressContext.Provider value={userAnswersContextValue}>
                <Summary/>
            </QuizProgressContext.Provider>

        )
    }

    //separate return for readability
    return (
        <QuizProgressContext.Provider value={userAnswersContextValue}>
            <div id={"quiz"}>
                <Question
                    key={activeQuestionIndex} //force component rerender with key property and updating state variable
                />
            </div>
        </QuizProgressContext.Provider>
    )
}