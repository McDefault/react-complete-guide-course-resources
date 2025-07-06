import {redirect} from "react-router-dom";

export function getAuthToken() {
    return localStorage.getItem('token');
}

export function setAuthToken(token = null) {
    if (!token) {
        localStorage.removeItem('token');
    } else {
        localStorage.setItem('token', token);
    }
}

export function tokenLoader() {
    return {
        token: getAuthToken()
    };
}

export function checkAuthLoader() {
    const token = getAuthToken();
    if (!token) {
        return redirect("/auth");
    }

    return null;
}