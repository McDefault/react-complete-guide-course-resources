import {Outlet} from "react-router-dom";
import Header from "./Header.jsx";

export default function RouterRoot() {
    return (
        <>
            <Header/>
            <main>
                <Outlet/>
            </main>
        </>
    )
}