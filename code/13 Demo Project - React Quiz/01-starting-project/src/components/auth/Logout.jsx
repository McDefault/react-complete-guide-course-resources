import {logout} from "../../util/auth.js";
import {redirect} from "react-router-dom";

export function logoutAction() {
    logout();
    return redirect('/');
}