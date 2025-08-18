import {createContext, type FC, type ReactNode, useCallback, useState} from "react";
import type {Question as QuestionType, Question} from "../models/Question.ts";
import {useRouteLoaderData} from "react-router-dom";

type QuizProgressContextType = {
    items: string[];
    index: number;
    QUESTIONS: Question[];
    onSelectAnswer: (answer: string) => void;
    onSkipAnswer: () => void;
}

export const QuizProgressContext = createContext<QuizProgressContextType>({
    items: [],
    index: 0,
    QUESTIONS: [
        {
            id: "",
            text: "",
            answers: []
        }
    ],
    onSelectAnswer: () => {},
    onSkipAnswer: () => {},
});

type QuizProgressProviderProp = {
    children: ReactNode,
}

const QuizProgressProvider: FC<QuizProgressProviderProp> = ({children}) => {

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

    const quizProgressContextValue: QuizProgressContextType = {
        items: userAnswers.items,
        index: activeQuestionIndex,
        QUESTIONS: QUESTIONS,
        onSelectAnswer: handleClickAnswer,
        onSkipAnswer: handelSkipAnswer,
    };

    return <QuizProgressContext.Provider value={quizProgressContextValue}>
        {children}
    </QuizProgressContext.Provider>
}

export default QuizProgressProvider;