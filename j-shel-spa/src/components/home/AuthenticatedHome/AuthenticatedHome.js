import { useState, useEffect } from "react";

import ErrorPage from '../../error/ErrorPage/ErrorPage'
import Hotels from "../../hotels/Hotels/Hotels";
import NoData from '../../hotels/NoData/NoData'
import { getAllHotels } from '../../../services/hotelService'


const AuthenticatedHome = () => {
    const [goldenHotels, setGoldenHotels] = useState([]);
    const [hotels, setHotels] = useState([]);
    const [errorMessage, setErrorMessage] = useState(null);

    useEffect(() => {

        getAllHotels()
            .then(res => {
                setGoldenHotels(res.goldenArea);
                setHotels(res.hotels);

            })
            .catch(err => setErrorMessage(err.message));

    }, [])

    if (errorMessage) {
        return <ErrorPage message={errorMessage} />
    }

    return (
        goldenHotels.lenght == 0 ?
            <NoData
                header="Looks like no one has added a hotel yet!"
                content="Be the first!"
            /> :
            <>
                <Hotels type="gold" header="Gold Area" data={goldenHotels} />
                {hotels.length > 0 ?
                    <Hotels type="normal" header="All Hotels" data={hotels} />
                    : ""}
            </>



    )
}

export default AuthenticatedHome;