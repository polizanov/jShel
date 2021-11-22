import { useState, useEffect } from "react";

import ErrorPage from '../../error/ErrorPage/ErrorPage'
import Hotels from "../Hotels/Hotels";
import NoData from "../NoData/NoData";

import { getFavouriteHotels } from '../../../services/hotelService'

const FavouriteHotels = () => {
    const [hotels, setHotels] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        getFavouriteHotels()
        .then(res => {
            setHotels(res);
        })
        .catch(err => setError(err.message))
    }, [])

    if(error) {
        <ErrorPage message={error} />
    }


    return <>
        { hotels.length > 0 ? 
        <Hotels type="Favourite" header="My Favourite" data={hotels} /> : 
        <NoData
                header="Looks like you have no hotels added!"
                content="Аdd the first one!"
        />}
    </>
}

export default FavouriteHotels;