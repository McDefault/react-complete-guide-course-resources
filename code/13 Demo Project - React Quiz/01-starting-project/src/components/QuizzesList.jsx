import classes from './EventsList.module.css';
import {Link} from "react-router-dom";

function QuizzesList({quizzes}) {
    return (
        <div className={classes.events}>
            <h1>All Quizes</h1>
            <ul className={classes.list}>
                {quizzes.map((quiz) => (
                    <li key={quiz.id} className={classes.item}>
                        <Link to={quiz.id}>
                            <div className={classes.content}>
                                <h2>{quiz.title}</h2>
                                <p>{quiz.description}</p>
                            </div>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default QuizzesList;
