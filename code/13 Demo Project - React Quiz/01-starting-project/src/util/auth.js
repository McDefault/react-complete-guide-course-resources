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