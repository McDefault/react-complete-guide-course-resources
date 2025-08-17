import EventForm from "./EventForm.tsx";
import type {Event} from "../../models/Event";
function NewEventPage() {

    const initialEventData: Event = {
        id: '',
        title: 'New Event',
        description: 'New Description',
        image: '',
        date: '',
    }

    return <EventForm method={"post"} event={initialEventData} />
}

export default NewEventPage;