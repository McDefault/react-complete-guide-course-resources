import {useRouteLoaderData} from "react-router-dom";
import {ROUTE_IDS} from "../App.tsx";
import {EventDetailsLoaderType} from "../models/loaders/EventDetailsLoaderType.ts";

export const useEventDetailsLoader = (): EventDetailsLoaderType => {
    return useRouteLoaderData(ROUTE_IDS.eventDetail) as EventDetailsLoaderType;
};
