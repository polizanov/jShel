const { IMAGE_URL_PATTERN } = require("../../config")

function validateHotelData(data) {
    let { name, imageUrl, description, town, stars, address, public } = data;

    [name,
        imageUrl,
        description,
        town,
        stars,
        address,].map(x => {
            if (!x) {
                throw { message: "All fields are required!" };
            }
        })

    if (public == undefined) {
        throw { message: "All fields are required!" };
    }

    if (name.length < 6) {
        throw { message: "Name must be at least 6 characters!" };
    }

    if (imageUrl.length < 10) {
        throw { message: "Imgage Url must must be at least 6 characters!" };
    }

    if (!IMAGE_URL_PATTERN.test(imageUrl)) {
        throw { message: "Invalid Image Url!" };
    }

    if (description.length < 10) {
        throw { message: "Name must be at least 10 characters!" };
    }

    if (town.length < 4) {
        throw { message: "Town must be at least 4 characters!" };
    }

    if (!Number(stars)) {
        throw { message: "Stars must be a valid number!" };
    }

    if (stars < 1 || stars > 5) {
        throw { message: "Stars must be a between 1 and 5!" };
    }

    if (address.length < 4) {
        throw { message: "Address must be at least 4 characters!" };
    }

    if (typeof public !== "boolean") {
        throw { message: "Bool must be a boolean" }
    }
}

module.exports = {
    validateHotelData,
}