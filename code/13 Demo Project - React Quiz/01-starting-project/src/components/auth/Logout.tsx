import {logout} from "../../util/auth.ts";
import {redirect} from "react-router-dom";

export function logoutAction() {
    logout();
    return redirect('/');
}