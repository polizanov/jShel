module.exports = (req, res, next) => {
    if(!res.locals.user) {
        res.status(401).json({message: "Unothorized"});
        return;
    }

    next();
}