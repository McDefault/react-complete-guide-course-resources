import {useRouteLoaderData} from "react-router-dom";
import {ROUTE_IDS} from "../App.tsx";
import {QuizDetailsLoaderType} from "../models/loaders/QuizDetailsLoaderType.ts";

export const useQuizDetailsLoader = (): QuizDetailsLoaderType => {
    return useRouteLoaderData(ROUTE_IDS.quizDetail) as QuizDetailsLoaderType;
};
