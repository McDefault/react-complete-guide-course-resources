import EventsList from './EventsList.jsx';
import {useLoaderData} from "react-router-dom";

function EventsPage() {
    const loaderData = useLoaderData();
    const fetchedEvents = loaderData.events;

    return (
        <EventsList events={fetchedEvents}/>
    );
}

export default EventsPage;

export async function EventsPageLoader() {
    const response = await fetch('http://localhost:8080/events');

    if (!response.ok) {
        throw {message: 'No events found.'}; // Fallback to errorElement
    } else {
        return response;
    }
}