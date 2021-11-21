import hotelLinks from "./api-links/hotelLinks";
import url from "./api-links/url";

import getOptions from './getOptions';

export function getAllHotels() {
    return fetch(`${url}`, getOptions())
        .then(res => {
            if (!res.ok) {
                return res.json()
                    .then(err => {
                        throw err;
                    })
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
