const mongoose = require('mongoose');
const {DB_PORT} = require("./index");

mongoose.connect(`mongodb://localhost:${DB_PORT}/jShel`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    autoIndex: false
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log("DB CONNECTED");
});

module.exports = mongoose;
