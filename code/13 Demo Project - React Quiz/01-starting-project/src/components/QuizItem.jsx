import classes from './EventItem.module.css';
import {Link} from "react-router-dom";

function QuizItem({quiz}) {
    function startDeleteHandler() {
        // ...
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
