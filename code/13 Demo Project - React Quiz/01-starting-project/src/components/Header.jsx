import logImg from '../assets/quiz-logo.png';
import {NavLink} from 'react-router-dom';

import classes from './Header.module.css'

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
                        <NavLink
                            to="/"
                            className={({isActive}) => isActive ? classes.active : undefined}
                            end
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="quiz"
                            className={({isActive}) => isActive ? classes.active : undefined}
                        >
                            Quiz
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="events"
                            className={({isActive}) => isActive ? classes.active : undefined}
                        >
                            Events
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="auth?mode=login"
                            className={({isActive}) => isActive ? classes.active : undefined}
                        >
                            Login
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}