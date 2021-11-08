import hotelLinks from "../api-links/hotelLinks";
import port from "../api-links/port";

function goldenAreaService() {
    return fetch(`${port}${hotelLinks.goldenArea}`)
        .then(res => res.json())
}

export default goldenAreaService;