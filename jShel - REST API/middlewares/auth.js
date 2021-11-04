const {JWT_SECRET, SESSION} = require("../config/");
const jwt = require("jsonwebtoken")

module.exports = (req, res, next) => {
    let token = req.headers[SESSION];

    if(token) {
        jwt.verify(token, JWT_SECRET, (err, decoded) => {
            if(err) {
                res.locals.users = "";
                return;
            }

            res.locals.user = decoded;
        })
    }

    next();
}