import {Form, redirect, useActionData, useNavigate, useNavigation} from 'react-router-dom';
import classes from './EventForm.module.css';
import {type FC} from "react";

import {type Event} from "../../models/Event.ts"
import {patchEventById, postEvent} from "../../util/http.ts";

type EventsFormProp = {
    method: string,
    event: Event
};

const EventForm: FC<EventsFormProp> = ({method, event}) => {
    const navigate = useNavigate();
    const navigation = useNavigation();
    const isSubmitting = navigation.state === 'submitting';
    const actionData = useActionData();

    function cancelHandler() {
        navigate('..');
    }

    return (
        <Form method={method} className={classes.form}>
            {actionData && actionData.errors && (<ul>
                {Object.values(actionData.errors).map((error) => (
                    <li key={error}>{error}</li>
                    ))}
            </ul>)}
            <p>
                <label htmlFor="title">Title</label>
                <input id="title" type="text" name="title" required defaultValue={event ? event.title : 'Test'}/>
            </p>
            <p>
                <label htmlFor="image">Image</label>
                <input id="image" type="url" name="image" required
                       defaultValue={event ? event.image : 'http://localhost:5173/src/assets/quiz-logo.png'}/>
            </p>
            <p>
                <label htmlFor="date">Date</label>
                <input id="date" type="date" name="date" required defaultValue={event ? event.date : ''}/>
            </p>
            <p>
                <label htmlFor="description">Description</label>
                <textarea id="description" name="description" rows="5" required
                          defaultValue={event ? event.description : 'Test'}/>
            </p>
            <div className={classes.actions}>
                <button type="button" onClick={cancelHandler}>
                    Cancel
                </button>
                <button disabled={isSubmitting}>{isSubmitting ? 'Submitting...' : 'Save'}</button>
            </div>
        </Form>
    );
}

export default EventForm;

export async function NewAndEditEventAction({request, params}) {
    const method = request.method;
    const data = await request.formData();

    let newEvent: Event = {
        id: '',
        title: data.get('title'),
        image: data.get('image'),
        date: data.get('date'),
        description: data.get('description')
    };

    if (method === 'PATCH') {
        const id = params.eventId; //referring to Router Definition
        await patchEventById(id, newEvent)
    } else {
        await postEvent(newEvent);
    }


    return redirect('/events');
}