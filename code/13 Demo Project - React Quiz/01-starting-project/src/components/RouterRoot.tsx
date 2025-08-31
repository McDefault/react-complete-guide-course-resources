import {Outlet, useLoaderData, useSubmit} from "react-router-dom";
import Header from "./Header.tsx";
import {useEffect} from "react";
import {getTokenDuration} from "../util/auth.ts";
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