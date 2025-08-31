import {useRouteLoaderData} from "react-router-dom";
import {ROUTE_IDS} from "../App.tsx";
import {EventsPageLoaderType} from "../models/loaders/EventsPageLoaderType.ts";

export const useEventsPageLoader = (): EventsPageLoaderType => {
    return useRouteLoaderData(ROUTE_IDS.eventsPage) as EventsPageLoaderType;
};
