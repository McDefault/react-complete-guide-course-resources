import {useLoaderData} from 'react-router-dom';
import EventItem from "./EventItem.jsx";

function EventDetailPage() {
    const loaderData = useLoaderData();

    return (
        <EventItem event={loaderData.event}/>
    );
}

export default EventDetailPage;

export async function EventDetailsLoader({params}) {
    const id = params.eventId;
    const response = await fetch('http://localhost:8080/events/' + id);

    if (!response.ok) {
        throw new Response(JSON.stringify({message: 'No events found.'}), {status: 500}); // Fallback to errorElement
    } else {
        return response;
    }
}