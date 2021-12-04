import url from './api-links/url';
import auth from './api-links/authLinks'
import getOptions from './getOptions';


export function getMyProfileData(id, token) {
    return fetch(`${url}${auth.myProfile}`, getOptions("get", token))
        .then(res => {
            if (!res.ok) {
                return res.json()
                    .then(err => { throw err })
            }
            return res.json()
        })

}

export function login(data) {
    return fetch(`${url}${auth.login}`, getOptions('post', null, data))
        .then(res => {
            if (!res.ok) {
                return res.json()
                    .then(err => { throw err })
            }
            return res.json()
        })

}


export function register(data) {
    return fetch(`${url}${auth.register}`, getOptions('post', null, data))
        .then(res => {
            if(!res.ok){
                return res.json()
                    .then(err => {throw err})
            }
            return res.json();
        })
}

export function logout(token) {
    return fetch(`${url}${auth.logout}`, getOptions("get", token))
        .then(res => {
            if (!res.ok) {
                return res.json()
                    .then(err => {
                        throw err;
                    })
            }
            return res.json()
        })
        .catch(err => {
            throw err;
        })
}





