import Header from "./Header.jsx";
import PageContent from "./PageContent.jsx";
import {useRouteError} from "react-router-dom";

export default function Error() {
    const error = useRouteError();

    let title = "An error occurred!";
    let message = "Something went wrong!";

    if (error.status === 500) {
        message = JSON.parse(error.data).message;
    }
    if (error.status === 404) {
        title = "Not Found!";
        message = "Could not find this page or resource!";
    }

    return (
        <>
            <Header/>
            <PageContent title={title}>
                <p>{message}</p>
            </PageContent>
        </>
    );
}