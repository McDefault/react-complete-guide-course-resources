import {redirect} from "react-router-dom";

export function getAuthToken() {
    const token = localStorage.getItem('token');

    if (!token) {
        return null;
    }

    const tokenDuration = getTokenDuration();

    if (tokenDuration < 0) {
        return 'EXPIRED';
    }

    return token;
}

export function setAuthToken(token = null) {
    if (!token) {
        localStorage.removeItem('token');
    } else {
        localStorage.setItem('token', token);
    }
}

export function setAuthExpiration(expires = null) {
    if (!expires) {
        localStorage.removeItem('expiration');
    } else {
        localStorage.setItem('expiration', expires);
    }
}

export function logout() {
    setAuthExpiration();
    setAuthToken();
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

export function getTokenDuration() {
    const storedExpirationDate = localStorage.getItem('expiration');
    const expirationDate = new Date(storedExpirationDate);
    const now = new Date();
    const duration = expirationDate.getTime() - now.getTime();
    return duration;
}