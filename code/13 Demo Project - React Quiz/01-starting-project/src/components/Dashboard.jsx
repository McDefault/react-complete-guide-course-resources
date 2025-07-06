import {Link} from "react-router-dom";
import {getAuthToken} from "../util/auth.js";

export default function Dashboard() {
    return (
        <>
            <h1>My Dashboard</h1>
            <p>Hi {getAuthToken()}</p>
            <p>
                Take <Link to="/quiz">Quiz</Link>
            </p>
        </>
    );
}