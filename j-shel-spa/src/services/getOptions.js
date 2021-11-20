import { getAuthToken } from './authService'

function getOprtions (method = "get", body){
    let options = {
        method,
        headers: {
            "Content-Type": "application/json"
        },
    }

    let token = getAuthToken();

    if (token !== null) {
        options.headers['sessionToken'] = token;
    }

    if (body) {
            options.body = JSON.stringify(body);
    }

    return options;
}

export default getOprtions;