import hotelLinks from "./api-links/hotelLinks";
import url from "./api-links/url";

import getOptions from './getOptions';

export function getAllHotels() {
    return fetch(`${url}`, getOptions())
        .then(res => {
            if (!res.ok) {
                return res.json()
                    .then(err => { throw err });
            }
            return res.json();
        })
}

export function getFavouriteHotels() {
    return fetch(`${url}${hotelLinks.favouriteHotels}`, getOptions())
        .then(res => {
            if (!res.ok) {
                console.log(res.json())
                return res.json()
                    .then(err => { throw err });
            }
            return res.json();
        })

}

export function goldenAreaService() {
    return fetch(`${url}${hotelLinks.goldenArea}`, getOptions())
        .then(res => res.json())
        .catch(err => console.log(err))
}

export function getDetails(id) {
    return fetch(`${url}${hotelLinks.details}/${id}`, getOptions())
        .then(res => res.json())
        .catch(err => console.log(err))
}

export function createHotel(data) {
    const hotel = {
        name: data.name,
        imageUrl: data.imageUrl,
        description: data.description,
        town: data.town,
        stars: data.stars,
        address: data.address,
        public: data.isPublic,
    }

    return fetch(`${url}${hotelLinks.createHotel}`, getOptions('post', hotel))
        .then(res => {
            if (!res.ok) {
                return res.json()
                    .then(err => { throw err })
            }
            return res.json();
        })
}

export function editHotel(data, hotelId) {
    const hotel = {
        name: data.name,
        imageUrl: data.imageUrl,
        description: data.description,
        town: data.town,
        stars: data.stars,
        address: data.address,
        public: data.isPublic,
    }

    return fetch(`${url}${hotelLinks.editHotel}/${hotelId}`, getOptions('put', hotel))
        .then(res => {
            if (!res.ok) {
                return res.json()
                    .then(err => { throw err })
            }
            return res.json
        })
}