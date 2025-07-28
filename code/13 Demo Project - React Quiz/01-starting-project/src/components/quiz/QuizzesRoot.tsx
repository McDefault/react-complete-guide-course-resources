import {Outlet} from 'react-router-dom';
import QuizzesNavigation from "./QuizzesNavigation.tsx";


function QuizzesRootLayout() {
    return (
        <>
            <QuizzesNavigation/>
            <Outlet/>
        </>
    );
}

export default QuizzesRootLayout;
