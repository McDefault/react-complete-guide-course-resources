import {type Event} from "../Event.ts"

export type EventsPageLoaderType = {
    fetchEvents: Promise<Event[]> //wrap in Promise if resolve after page load
}