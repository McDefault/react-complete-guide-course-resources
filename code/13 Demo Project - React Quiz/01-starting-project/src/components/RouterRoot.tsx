import {Outlet, useLoaderData, useSubmit} from "react-router-dom";
import Header from "./Header.tsx";
import {useEffect} from "react";
import {getTokenDuration} from "../util/auth.ts";

export default function RouterRoot() {
    const {token} = useLoaderData();
    const submit = useSubmit();

    useEffect(() => {
        if (!token) {
            return;
        }

        if (token === "EXPIRED") {
            submit(null, {action: "/logout", method: "POST"});
            return;
        }

        const tokenDuration = getTokenDuration();

        setTimeout(() => {
            submit(null, {action: "/logout", method: "POST"});
        }, tokenDuration)
    }, [token, submit]);

    return (
        <>
            <Header/>
            <main>
                <Outlet/>
            </main>
        </>
    )
}