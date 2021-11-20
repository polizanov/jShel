export function validateLogin(data) {
    let { username, password } = data
    let errorArr = [];

    if (!username || !password) {
        errorArr.push("Enter Username and Password");
    }

    if (username == "" || password == "") {
        errorArr.push("All fields are required!");
    }

    if (username.length < 6 || password.length < 6) {
        errorArr.push("Username, and Password must be at least 6 characters!");
    }

    if(errorArr.length > 0) {
        throw {messages: errorArr}
    }
}