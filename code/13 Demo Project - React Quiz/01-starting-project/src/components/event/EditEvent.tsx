import EventForm from "./EventForm.tsx";
import {useEventDetailsLoader} from "../../hooks/useEventDetailsLoader.ts";

function EditEventPage() {
  const {fetchEvent} = useEventDetailsLoader();

  return <EventForm method={"patch"}  event={fetchEvent} />
}

export default EditEventPage;
