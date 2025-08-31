import {redirect} from 'react-router-dom';
import EventItem from "./EventItem.tsx";
import {deleteEventById, getEventById} from "../../util/http.ts";
import {EventDetailsLoaderType} from "../../models/EventDetailsLoaderType.ts";
import {useEventDetailsLoader} from "../../hooks/useEventDetailsLoader.ts";

function EventDetailPage() {
    const loaderData = useEventDetailsLoader();
    return (
        <EventItem event={loaderData.fetchEvent}/>
    );
}

export default EventDetailPage;

export async function EventDetailsLoader({params}): Promise<EventDetailsLoaderType> {
    const id = params.eventId;
    return {
        fetchEvent: await getEventById(id)
    };
}

export async function EventsDeleteAction({params}) {
    const id = params.eventId;
    const response = await deleteEventById(id);
    return redirect('/events');
}