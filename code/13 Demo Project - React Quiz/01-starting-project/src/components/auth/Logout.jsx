import {setAuthToken} from "../../util/auth.js";
import {redirect} from "react-router-dom";

export function logoutAction() {
    setAuthToken();
    return redirect('/');
}