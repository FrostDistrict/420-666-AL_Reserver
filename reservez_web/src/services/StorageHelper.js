export function SaveUser(user) {
    sessionStorage.setItem('user', JSON.stringify(user));
}

export function GetUser() {
    if (sessionStorage.length === 0) return null;
    let item = sessionStorage.getItem('user');
    if (item === "undefined" || item === "null") return null;
    return JSON.parse(item);
}

export function ClearUser() {
    sessionStorage.clear();
}