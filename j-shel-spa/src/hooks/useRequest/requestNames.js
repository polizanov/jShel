import * as authService from '../../services/authService';
import * as hotelService from '../../services/hotelService'

const methodsConfig = {
    "getMyProfileData": authService.getMyProfileData,
    "getAllHotels": hotelService.getAllHotels,
    "getGoldenArea": hotelService.getGoldenArea,
    "getFavouriteHotels": hotelService.getFavouriteHotels,
    "getDetails": hotelService.getDetails,
}

export default methodsConfig