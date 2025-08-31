import {useRouteLoaderData} from "react-router-dom";
import {ROUTE_IDS} from "../App.tsx";
import {TokenLoaderType} from "../models/loaders/TokenLoaderType.ts";

export const useRootLoader = (): TokenLoaderType => {
    return useRouteLoaderData(ROUTE_IDS.root) as TokenLoaderType;
};
