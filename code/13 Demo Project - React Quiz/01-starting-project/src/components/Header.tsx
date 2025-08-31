import logImg from '../assets/quiz-logo.png';
import {Form, NavLink} from 'react-router-dom';

import classes from './Header.module.css'
import NewsletterSignup from "./newsletter/NewsletterSignup.tsx";
import {useAuthContext} from "../hooks/useAuthContext.ts";

export default function Header() {
    const {token} = useAuthContext();
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
                            Quizzes
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
                            to="newsletter"
                            className={({isActive}) => isActive ? classes.active : undefined}
                        >
                            Newsletter
                        </NavLink>
                    </li>
                    {!token &&
                        <li>
                            <NavLink
                                to="auth?mode=login"
                                className={({isActive}) => isActive ? classes.active : undefined}
                            >
                                Login
                            </NavLink>
                        </li>
                    }
                    <li>
                        <NewsletterSignup/>
                    </li>
                    {token &&
                        <li>
                            <Form action={"/logout"} method={"POST"}>
                                <button>Logout</button>
                            </Form>
                        </li>
                    }
                </ul>
            </nav>
        </header>
    )
}