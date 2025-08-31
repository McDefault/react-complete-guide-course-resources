import {Link} from "react-router-dom";
import {useAuthContext} from "../hooks/useAuthContext.ts";

export default function Dashboard() {
    const {token} = useAuthContext();

    return (
        <>
            <h1>My Dashboard</h1>
            <p>Hi {token}</p>
            <p>
                Take <Link to="/quiz">Quiz</Link>
            </p>
        </>
    );
}