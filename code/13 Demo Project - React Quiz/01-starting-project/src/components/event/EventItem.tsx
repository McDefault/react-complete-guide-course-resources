import classes from "./EventItem.module.css";
import {Link, useRouteLoaderData, useSubmit} from "react-router-dom";
import {type FC} from "react";
import {type Event} from "../../models/Event.ts";

type EventsItemProp = { event: Event };

const EventItem: FC<EventsItemProp> = ({event}) => {
    const submit = useSubmit();
    const {token} = useRouteLoaderData("root");

    function startDeleteHandler() {
        const proceed = window.confirm('Are you sure you want to delete this event?');

        if (proceed) {
            submit(null, {method: 'delete'});
        }
    }

    return (
        <article className={classes.event}>
            <h1>{event.title}</h1>
            <time>{event.date}</time>
            <p>{event.description}</p>
            {token &&
                <menu className={classes.actions}>
                    <Link to="edit">Edit</Link>
                    <button onClick={startDeleteHandler}>Delete</button>
                </menu>
            }
        </article>
    );
}

export default EventItem;
