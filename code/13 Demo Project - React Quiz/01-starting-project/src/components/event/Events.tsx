import EventsList from './EventsList.tsx';
import {Await, useLoaderData} from "react-router-dom";
import {Suspense} from "react";

function EventsPage() {
    const {fetchEvents} = useLoaderData();

    return (
        <Suspense fallback={<h1>Loading...</h1>}>
            <Await resolve={fetchEvents}>
                {(resolvedEvents) => <EventsList events={resolvedEvents}/>}
            </Await>
        </Suspense>
    )
}

export default EventsPage;

async function getAllEvents() {
    const response = await fetch('http://localhost:8080/events');

    if (!response.ok) {
        throw new Response(JSON.stringify({message: 'No events found.'}), {status: 500}); // Fallback to errorElement
    }

    const ResData = await response.json();
    return ResData.events;
}

export async function EventsPageLoader() {
    return {
        fetchEvents: getAllEvents(),
        // fetchEvents: await getAllEvents(), //use await to force resolve before page load
    };
    // version < 7 REACT-DOM
    // return defer({
    //     fetchEvents: getAllEvents(),
    // });
}