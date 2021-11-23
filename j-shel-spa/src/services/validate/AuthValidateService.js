const validator = require("validator");

export function validateLogin(data) {
    let { username, password } = data
    let errorArr = [];

    if (!username || !password) {
        errorArr.push("All fields are required!");
    }

    if (username.length < 6 || password.length < 6) {
        errorArr.push("Username, and Password must be at least 6 characters!");
    }

    if(errorArr.length > 0) {
        throw {
            messages: errorArr,
            username
        }
    }
}

export function validateRegister(data) {
    let { email, username, password, rePassword } = data;
    let errorArr = [];

    if (!username || !password || !email || !rePassword) {
        errorArr.push("All fields are required!");
    }

    if (username.length < 6 || password.length < 6 || rePassword.length < 6 || email.length < 6) {
        errorArr.push("All fields must be at least 6 characters!");
    }

    if(!validator.isEmail(email)) {
        errorArr.push("Invalid email");
    }

    if(password !== rePassword) {
        errorArr.push("Password and Repeat Password must be identical");
    }

    if(errorArr.length > 0) {
        throw {
            messages: errorArr,
            username,
            email
        }
    }
}