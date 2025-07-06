import {Outlet} from 'react-router-dom';
import QuizzesNavigation from "./QuizzesNavigation.jsx";


function QuizzesRootLayout() {
    return (
        <>
            <QuizzesNavigation/>
            <Outlet/>
        </>
    );
}

export default QuizzesRootLayout;
