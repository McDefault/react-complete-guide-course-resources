import EventForm from "./EventForm.jsx";
import {useRouteLoaderData} from "react-router-dom";

function EditEventPage() {
  const loaderData = useRouteLoaderData('event-detail');
  const event = loaderData.event;
  return <EventForm event={event} />
}

export default EditEventPage;
