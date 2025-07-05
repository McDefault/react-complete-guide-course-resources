import classes from '../event/EventItem.module.css';
import {Link, useSubmit} from "react-router-dom";

function QuizItem({quiz}) {
    const submit = useSubmit();

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
            <menu className={classes.actions}>
                <Link to="start">Start</Link>
                <Link to="edit">Edit</Link>
                <button onClick={startDeleteHandler}>Delete</button>
            </menu>
        </article>
    );
}

export default QuizItem;
