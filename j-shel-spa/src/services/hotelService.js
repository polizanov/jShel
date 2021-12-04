import hotelLinks from "./api-links/hotelLinks";
import url from "./api-links/url";

import getOptions from './getOptions';

export function getAllHotels(id, token) {
    return fetch(`${url}`, getOptions("get", token))
        .then(res => {
            if (!res.ok) {
                return res.json()
                    .then(err => { throw err });
            }
            return res.json();
        })
}

export function getFavouriteHotels(id, token) {
    return fetch(`${url}${hotelLinks.favouriteHotels}`, getOptions("get", token))
        .then(res => {
            if (!res.ok) {
                return res.json()
                    .then(err => { throw err });
            }
            return res.json();
        })

}

export function getGoldenArea() {
    return fetch(`${url}${hotelLinks.goldenArea}`, getOptions("get"))
        .then(res => res.json())
        .catch(err => console.log(err))
}

export function getDetails(id, token) {
    return fetch(`${url}${hotelLinks.details}/${id}`, getOptions("get", token))
        .then(res => res.json())
        .catch(err => console.log(err))
}

export function createHotel(data, token) {
    const hotel = {
        name: data.name,
        imageUrl: data.imageUrl,
        description: data.description,
        town: data.town,
        stars: data.stars,
        address: data.address,
        public: data.isPublic,
    }

    return fetch(`${url}${hotelLinks.createHotel}`, getOptions('post', token, hotel))
        .then(res => {
            if (!res.ok) {
                return res.json()
                    .then(err => { throw err })
            }
            return res.json();
        })
}

export function editHotel(data, hotelId, token) {
    const hotel = {
        name: data.name,
        imageUrl: data.imageUrl,
        description: data.description,
        town: data.town,
        stars: data.stars,
        address: data.address,
        public: data.isPublic,
    }

    return fetch(`${url}${hotelLinks.editHotel}/${hotelId}`, getOptions('put', token, hotel))
        .then(res => {
            if (!res.ok) {
                return res.json()
                    .then(err => { throw err })
            }
            return res.json
        })
}