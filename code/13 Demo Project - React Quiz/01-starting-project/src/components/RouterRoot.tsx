import {Outlet} from "react-router-dom";
import Header from "./Header.tsx";
import AuthContextProvider from "../store/auth-context.tsx";

export default function RouterRoot() {
    return (
        <AuthContextProvider>
            <Header/>
            <main>
                <Outlet/>
            </main>
        </AuthContextProvider>
    )
}