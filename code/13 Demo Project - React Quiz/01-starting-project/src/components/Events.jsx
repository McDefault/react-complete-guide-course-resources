import EventsList from './EventsList.jsx';
import {useLoaderData} from "react-router-dom";

function EventsPage() {
    const fetchedEvents = useLoaderData();

    return (
        <EventsList events={fetchedEvents}/>
    );
}

export default EventsPage;

export async function EventsPageLoader() {
    const response = await fetch('http://localhost:8080/events');

    if (!response.ok) {
        // setError('Fetching events failed.');
    } else {
        const resData = await response.json();
        return (resData.events);
    }
}