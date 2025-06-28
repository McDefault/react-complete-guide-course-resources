import logImg from '../assets/quiz-logo.png';
import {Link} from 'react-router-dom';

import classes from './MainNavigation.module.css'

export default function Header() {
    return (
        <header className={classes.header}>
            <img src={logImg} alt=""/>
            <h1>
                Quiz
            </h1>
            <nav>
                <ul className={classes.list}>
                    <li>
                        <Link to="/">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="quiz">
                            Quiz
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}