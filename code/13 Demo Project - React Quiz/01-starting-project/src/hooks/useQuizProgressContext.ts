import {useContext} from "react";
import {QuizProgressContext} from "../store/quiz-progress-context.tsx";
import {QuizProgressContextType} from "../models/context/QuizProgressContextType.ts";

export const useQuizProgressContext = (): QuizProgressContextType => {
    return useContext(QuizProgressContext) as QuizProgressContextType;
};
