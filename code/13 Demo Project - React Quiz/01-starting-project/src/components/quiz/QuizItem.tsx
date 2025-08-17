import classes from '../event/EventItem.module.css';
import {Link, useRouteLoaderData, useSubmit} from "react-router-dom";
import type {Quiz} from '../../models/Quiz.ts';
import type {FC} from "react";

type QuizItemProp = {
    quiz: Quiz,
}

const QuizItem: FC<QuizItemProp> = ({quiz}) => {
    const submit = useSubmit();
    const {token} = useRouteLoaderData("root");

    function startDeleteHandler() {
        const proceed = window.confirm('Are you sure you want to delete this quiz?');

        if (proceed) {
            submit(null, {method: 'delete'});
        }
    }

    return (
        <article className={classes.event}>
            <h1>{quiz.title}</h1>
            <p>{quiz.description}</p>
            <Link to="start">Start</Link>
            {token && <menu className={classes.actions}>

                <Link to="edit">Edit</Link>
                <button onClick={startDeleteHandler}>
                    Delete
                </button>

            </menu>}
        </article>
    );
}

export default QuizItem;
