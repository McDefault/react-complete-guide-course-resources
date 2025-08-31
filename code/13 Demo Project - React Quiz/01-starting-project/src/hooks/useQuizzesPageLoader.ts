import {useRouteLoaderData} from "react-router-dom";
import {ROUTE_IDS} from "../App.tsx";
import {QuizzesPageLoaderType} from "../models/loaders/QuizzesPageLoaderType.ts";

export const useQuizzesPageLoader = (): QuizzesPageLoaderType => {
    return useRouteLoaderData(ROUTE_IDS.quizzesPage) as QuizzesPageLoaderType;
};
