import {NavLink, useRouteLoaderData} from 'react-router-dom';

import classes from './QuizzesNavigation.module.css';

function QuizzesNavigation() {
    const {token} = useRouteLoaderData("root");

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
