const Hotel = require("../schemes/Hotel");
const User = require("../schemes/User")
const { IMAGE_URL_PATTERN } = require("../config");

const validate = require("../services/validations/validate");

function createHotel(data, userId) {
    try {
        validate.validateHotelData(data);
    } catch (err) {
        throw { message: err.message }
    }

    let { name, imageUrl, description, town, stars, address, owner_id, public } = data;

    let hotelObj = new Hotel({
        name,
        imageUrl,
        description,
        town,
        stars,
        address,
        owner_id: userId,
        public,
    });

    return hotelObj.save();
}

async function editHotel(data, userId, hotelId) {
    let hotel = await Hotel.findOne({_id: hotelId});

    if(hotel.owner_id.toString() !== userId) {
        throw { message: "Unauthorized!" }
    }

    try {
        validate.validateHotelData(data);
    } catch (err) {
        throw { message: err.message }
    }

    let { name, imageUrl, description, town, stars, address, owner_id, public } = data;

    return Hotel.updateOne({_id: hotelId}, {
        name,
        imageUrl,
        description,
        town,
        stars,
        address,
        owner_id: userId,
        public,
    })
}

async function deleteHotel(userId, hotelId){
    let hotel = await Hotel.findOne({ _id: hotelId });

    if (hotel.owner_id.toString() !== userId) {
        throw { message: "Unauthorized!" };
    }

    return Hotel.deleteOne({ _id: hotelId });
}

async function likeHotel(userId, hotelId) {
    let [hotel, user] = await Promise.all([
        Hotel.findOne({ _id: hotelId}),
        User.findOne({ _id: userId })
    ]);

    if(hotel.owner_id.toString() == userId) {
        throw {message: "Unothorized"};
    }

    if(!hotel.public) {
        throw {message: "Unothorized"};
    }

    if(user.likedHotels.includes(hotelId)){
        throw {message: "Already liked"};
    }

    hotel.likes.push(userId);
    user.likedHotels.push(hotelId);

    return Promise.all([
        Hotel.updateOne({ _id: hotelId }, hotel),
        User.updateOne({ _id: userId }, user)
    ]);
}

function getGoldenHotels() {
    return Hotel.find({public: true}).limit(4).sort({likes: -1});
}

async function getAll(){
    return Promise.all([
        Hotel.find({public: true}).limit(4).sort({likes: -1}).sort({public: false}),
        await Hotel.find({public: true}).sort({likes: -1}).then(x => x.slice(4))
    ])
    .then(([goldenArea, hotels]) => {
        return Object.assign({goldenArea, hotels});
    })
}

function getById(id) {
    return Hotel.findOne({_id: id});
}

module.exports = {
    createHotel,
    editHotel,
    deleteHotel,
    likeHotel,
    getGoldenHotels,
    getAll,
    getById,
}