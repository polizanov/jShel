import { useState, useEffect } from "react";

import ErrorPage from '../../error/ErrorPage/ErrorPage'
import Hotels from "../hotelToolsComponents/Hotels/Hotels";
import NoData from "../hotelToolsComponents/NoData/NoData";

import { getFavouriteHotels } from '../../../services/hotelService'

const FavouriteHotels = () => {
    const [hotels, setHotels] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        getFavouriteHotels()
            .then(res => {
                setHotels(res.likedHotels);
            })
            .catch(err => setError(err.message));
    }, [])

    if (error) {
        return <ErrorPage message={error} />
    }

    if (hotels.length == 0) {
        return <NoData
            header="Looks like you haven't liked any hotels yet!"
            content="Like the first one!"
            buttonValue="All Hotels"
            buttonLink="/home"
        />
    }

    return <Hotels type="favourite" header="My Favourite" data={hotels} /> 
}

export default FavouriteHotels;