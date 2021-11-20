import hotelLinks from "./api-links/hotelLinks";
import url from "./api-links/url";

function goldenAreaService() {
    return fetch(`${port}${hotelLinks.goldenArea}`)
        .then(res => res.json())
        .catch(err => console.log(err))
}

function getDetails(id) {
    return fetch(`${port}${hotelLinks.details}/${id}`)
        .then(res => res.json())
        .catch(err => console.log(err))

}

export {
    goldenAreaService,
    getDetails,
}