import url from './api-links/url';
import auth from './api-links/authLinks'
import getOptions from './getOptions';

function setUserAuthData(token, userId, username, email) {
    localStorage.setItem("sessionToken", token);
    localStorage.setItem("userId", userId);
    localStorage.setItem("username", username);
    localStorage.setItem("email", email);
}

function getAuthToken() {
    return localStorage.getItem("sessionToken");
}

function getAuthUserId() {
    return localStorage.getItem("userId");
}

function getAuthUsername() {
    return localStorage.getItem("username");
}

function getAuthEmail() {
    return localStorage.getItem("email");
}

function login(data) {
    return fetch(`${url}/${auth.login}`, getOptions('post', data))
        .then(err => {
            throw { "message": err.message }
        })
}

function register(data) {
    return fetch(`${url}/${auth.register}`, getOptions('post', data))
        .then(err => {
            throw { "message": err.message }
        })
}

function logout() {
    return fetch(`${url}/${auth.logout}`, getOptions())
}

export default {
    setUserAuthData,
    getAuthToken,
    getAuthUserId,
    getAuthUsername,
    getAuthEmail,
    login, 
    register, 
    logout
}


