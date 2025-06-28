import {Link} from "react-router-dom";

export default function Dashboard() {
    return (
        <>
            <h1>My Dashboard</h1>
            <p>
                Take <Link to="/quiz">Quiz</Link>
            </p>
        </>
    );
}