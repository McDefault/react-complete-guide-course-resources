import classes from '../event/EventsList.module.css';
import {Link} from "react-router-dom";
import type {FC} from "react";
import type {Quiz} from "../../models/Quiz.ts";

type QuizzesListProp = {
    quizzes: Quiz[],
}

const QuizzesList: FC<QuizzesListProp> = ({ quizzes }) => {

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
