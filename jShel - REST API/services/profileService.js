const Hotel = require("../schemes/Hotel");
const User = require("../schemes/User")
const { IMAGE_URL_PATTERN } = require("../config");

function getProfilePosts(profileId) {
    return Promise.all([
        User.findOne({ _id: profileId }).select("email").select("username").select("likedHotels").select("profileImg"),
        Hotel.find({ owner_id: profileId })
    ])
    .then(([profileInfo, hotels]) => {
            return Object.assign({ profileInfo, hotels })
        })
}

function getFavourites(userId) {
    return User.findOne({_id: userId}).select("likedHotels").populate("likedHotels");
}

module.exports = {
    getProfilePosts,
    getFavourites
}