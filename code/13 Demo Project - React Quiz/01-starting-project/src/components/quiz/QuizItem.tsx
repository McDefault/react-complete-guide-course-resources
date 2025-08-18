import classes from '../event/EventItem.module.css';
import {Link, useRouteLoaderData, useSubmit} from "react-router-dom";
import {type FC, useContext} from "react";
import {QuizProgressContext} from "../../store/quiz-progress-context.tsx";

const QuizItem: FC = () => {
    const submit = useSubmit();
    const {token} = useRouteLoaderData("root");

    const {quiz} = useContext(QuizProgressContext);

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
