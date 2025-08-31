import EventsList from './EventsList.tsx';
import {Await} from "react-router-dom";
import {Suspense} from "react";
import {getAllEvents} from "../../util/http.ts";
import {useEventsPageLoader} from "../../hooks/useEventsPageLoader.ts";
import {EventsPageLoaderType} from "../../models/EventsPageLoaderType.ts";

function EventsPage() {
    // const {fetchEvents} = useLoaderData(); //load current route loader
    const {fetchEvents} = useEventsPageLoader(); //load specified loader

    return (
        <Suspense fallback={<h1>Loading...</h1>}>
            <Await resolve={fetchEvents}>
                {(resolvedEvents) => <EventsList events={resolvedEvents}/>}
            </Await>
        </Suspense>
    )
}

export default EventsPage;

export async function EventsPageLoader(): Promise<EventsPageLoaderType> {
    return {
        fetchEvents: getAllEvents(),
        // fetchEvents: await getAllEvents(), //use await to force resolve before page load
    };
    // version < 7 REACT-DOM
    // return defer({
    //     fetchEvents: getAllEvents(),
    // });
}