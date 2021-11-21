import url from './api-links/url';
import auth from './api-links/authLinks'
import getOptions from './getOptions';

export function setUserAuthData(token, userId, username, email) {
    localStorage.setItem("sessionToken", token);
    localStorage.setItem("userId", userId);
    localStorage.setItem("username", username);
    localStorage.setItem("email", email);
}

export function clearUserData(){
    localStorage.clear();
}

export function getAuthToken() {
    return localStorage.getItem("sessionToken");
}

export function getAuthUserId() {
    return localStorage.getItem("userId");
}

export function getAuthUsername() {
    return localStorage.getItem("username");
}

export function getAuthEmail() {
    return localStorage.getItem("email");
}

export function login(data) {
    return fetch(`${url}${auth.login}`, getOptions('post', data))
        .then(res => {
            if (!res.ok) {
                return res.json()
                .then(err => {
                    throw err
                })
            }
            return res.json()
        })
        .catch(err => {
            throw err
        })

}

export function register(data) {
    return fetch(`${url}${auth.register}`, getOptions('post', data))
        .then(err => {
            throw { "message": err.message }
        })
}

export function logout() {
    return fetch(`${url}${auth.logout}`, getOptions())
        .then(res => {
            if(!res.ok) {
                return res.json()
                    .then(err => {
                        console.log(err)
                        throw err;
                    })
            }
            return res.json()
        })
        .catch(err => {
            throw err;
        })
}





