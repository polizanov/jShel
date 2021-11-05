module.exports = (req, res, next) => {
    console.log(`METHOD: ${req.method} => URL ${req.url}`);

    if (JSON.stringify(req.body) !== JSON.stringify({})) {
        if (req.body.password) {
            let logData = {};
            Object.entries(req.body)
                .map(([key, value]) => {
                    if (key == "password") {
                        logData[key] = "*******";
                    } else {
                        logData[key] = value;
                    }
                })
            console.log(logData);
            
        } else {
            console.log(req.body);
        }
    }

    next();
}