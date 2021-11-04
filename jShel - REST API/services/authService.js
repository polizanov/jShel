const User = require("../schemes/User");
const validator = require("validator");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const { JWT_SECRET, SALT_ROUNDS } = require("../config")

async function createUser(data) {
    let { email, username, password } = data;

    if(!email || !username || !password) {
        throw { message: "All fields are required!" };
    }

    if (email.trim() == "" || username.trim() == "" || password.trim() == "") {
        throw { message: "All fields are required!" };
    }

    if (email.trim().length < 6 || username.trim().length < 6 || password.trim().length < 6) {
        throw { message: "Username, Email, and Password must be at least 6 characters!" };
    }

    if (!validator.isEmail(email.trim())) {
        throw { message: "Invalid Email!" };
    }

    let [findUser, findEmail] = await Promise.all([
        User.findOne({ username: username.toLowerCase().trim() }),
        User.findOne({ email: email.toLowerCase().trim() })
    ])

    if (findUser) {
        throw { message: "User exist!" };
    }

    if (findEmail) {
        throw { message: "User with current email exist!" };
    }

    const hash = bcrypt.hashSync(password.trim(), SALT_ROUNDS);

    const userObj = new User({
        username: username.trim(),
        email: email.trim(),
        password: hash,
    })

    return userObj.save();
}

async function register(data) {

    try {
        await createUser(data);
    } catch (err) {
        throw { message: err.message };
    }

    let user = await User.findOne({ username: data.username });

    let token = jwt.sign({ id: user._id, username: user.username }, JWT_SECRET);

    return { sessionToken: token, objectId: user._id, username: user.username, email: user.email };
}

async function login(data) {
    let { username, password } = data;

    if(!username || !password) {
        throw { message: "All fields are required!" };
    }

    if (username == "" || password == "") {
        throw { message: "All fields are required!" };
    }

    if (username.length < 6 || password.length < 6) {
        throw { message: "Username, and Password must be at least 6 characters!" };
    }

    let user = await User.findOne({username: username});

    if(!user) {
        throw { message: "Incorect username or password!" };
    }

    let isMatch = await bcrypt.compare(password, user.password);

    if(!isMatch) {
        throw { message: "Incorect username or password!" };
    }

    let token = jwt.sign({ id: user._id, username: user.username }, JWT_SECRET);

    return { sessionToken: token, objectId: user._id, username: user.username, email: user.email };
}

module.exports = {
    login,
    register,
}