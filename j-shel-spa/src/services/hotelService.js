import hotelLinks from "./api-links/hotelLinks";
import url from "./api-links/url";

function goldenAreaService() {
    return fetch(`${url}${hotelLinks.goldenArea}`)
        .then(res => res.json())
        .catch(err => console.log(err))
}

function getDetails(id) {
    return fetch(`${url}${hotelLinks.details}/${id}`)
        .then(res => res.json())
        .catch(err => console.log(err))

}

export {
    goldenAreaService,
    getDetails,
}