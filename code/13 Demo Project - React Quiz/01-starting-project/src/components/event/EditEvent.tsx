import EventForm from "./EventForm.tsx";
import {useRouteLoaderData} from "react-router-dom";

function EditEventPage() {
  const loaderData = useRouteLoaderData('event-detail');
  const event = loaderData.event;
  return <EventForm method={"patch"}  event={event} />
}

export default EditEventPage;
