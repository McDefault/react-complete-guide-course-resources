import {Link} from "react-router-dom";
import {type FC} from "react";
import type {Event} from "../../models/Event.ts";
import classes from './EventForm.module.css';

type EventsListProp = { events: Event[] };

const EventsList: FC<EventsListProp> = ({events}) => {
    return (
        <div className={classes.events}>
            <h1>All Events</h1>
            <ul className={classes.list}>
                {events.map((event: Event) => (
                    <li key={event.id} className={classes.item}>
                        <Link to={event.id}>
                            <img src={event.image} alt={event.title}/>
                            <div className={classes.content}>
                                <h2>{event.title}</h2>
                                <time>{event.date}</time>
                            </div>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default EventsList;
