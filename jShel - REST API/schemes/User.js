const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        requred: true,
        minLength: 6
    },
    profileImg: {
        type: String,
        validate: /https?/
    },
    username: {
        type: String,
        requred: true,
        minLength: 6
    },
    password: {
        type: String,
        requred: true
    },
    likedHotels: [{
        type: mongoose.Types.ObjectId,
        ref: "Hotel"
    }]
});

module.exports = mongoose.model("User", userSchema);