export default function getOptions(method="get", body) {
    let options = {
        method,
        headers: {}
    }

    if(getAuthToken() !== null){
        options.headers['sessionToken'] = getAuthToken();
    }

    if(body) {
        options.headers['Content-Type'] = 'application/json',
        options.body = JSON.stringify(body);
    }

    return options;
}