import validatePaterns from './validatePatrens'

export function validateHotelData(data) {
    let {
        name,
        imageUrl,
        description,
        town,
        stars,
        address,
        isPublic,
    } = data;

    let errorArr = [];

    if (!name || !imageUrl || !description || !town || !stars || !address) {
        errorArr.push("All fields are required!");
    }

    if (name.length < 6) {
        errorArr.push("Name must be at least 6 characters!");
    }

    if (imageUrl.length < 10 || description.length < 10) {
        errorArr.push("Imgage Url and description must must be at least 10 characters!");
    }

    if (!validatePaterns.IMAGE_URL_PATTERN.test(imageUrl)) {
        errorArr.push("Invalid Image Url!");
    }

    if (town.length < 4) {
        errorArr.push("Town must be at least 4 characters!");
    }

    if (address.length < 4) {
        errorArr.push("Address must be at least 4 characters!");
    }


    if (errorArr.length > 0) {
        throw {
            messages: errorArr,
            name,
            imageUrl,
            description,
            town,
            stars,
            address,
            isPublic
        }
    }

}