import {createContext} from "react";
import type {Question} from "../models/Question.ts";

type QuizProgressContextValue = {
    items: string[];
    index: number;
    QUESTIONS: Question[];
    onSelectAnswer: (answer: string) => void;
    onSkipAnswer: () => void;
}

export const QuizProgressContext = createContext<QuizProgressContextValue>({
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