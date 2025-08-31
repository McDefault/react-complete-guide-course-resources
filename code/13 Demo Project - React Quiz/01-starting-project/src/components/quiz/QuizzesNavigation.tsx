import {NavLink} from 'react-router-dom';

import classes from './QuizzesNavigation.module.css';
import {useAuthContext} from "../../hooks/useAuthContext.ts";

function QuizzesNavigation() {
    const {token} = useAuthContext();

    return (
        <header className={classes.header}>
            <nav>
                <ul className={classes.list}>
                    <li>
                        <NavLink
                            to="/quiz"
                            className={({isActive}) =>
                                isActive ? classes.active : undefined
                            }
                            end
                        >
                            All Quizzes
                        </NavLink>
                    </li>
                    {token &&
                        <li>
                            <NavLink
                                to="/quiz/new"
                                className={({isActive}) =>
                                    isActive ? classes.active : undefined
                                }
                            >
                                New Quiz
                            </NavLink>
                        </li>
                    }
                </ul>
            </nav>
        </header>
    );
}

export default QuizzesNavigation;
