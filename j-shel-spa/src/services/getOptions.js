function getOprtions (method, token, body){
    let options = {
        method,
        headers: {
            "Content-Type": "application/json"
        },
    }

    if (token !== null) {
        options.headers['sessionToken'] = token;
    }

    if (body) {
            options.body = JSON.stringify(body);
    }

    return options;
}

export default getOprtions;