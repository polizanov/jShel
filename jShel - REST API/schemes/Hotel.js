const mongoose = require("mongoose");
const { IMAGE_URL_PATTERN } = require("../config");

const hotelSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 6,
    }, 
    imageUrl: {
        type: String,
        requred: true,
        minlength: 10,
        validate: IMAGE_URL_PATTERN,
    },
    description: {
        type: String,
        required: true,
        minlength: 10,
    },
    town: {
        type: String,
        required: true,
        minlength: 4,
    },
    address: {
        type: String,
        required: true,
        minlength: 4,
    },
    stars: {
        type: Number,
        required: true,
        min: 1,
        max: 5,
    },
    public: {
        type: Boolean,
        required: true,
    },
    owner_id: {
        type: mongoose.Types.ObjectId,
        ref: "User",
        required: true,
    },
    likes: [{
        type: mongoose.Types.ObjectId,
        ref: "User",
    }]
});

module.exports = mongoose.model("Hotel", hotelSchema);