import { render } from "@testing-library/react";
import useRequest from "../../../hooks/useRequest/useRequest";

import renderHotels from "../../../tools/renderHotels";
import ErrorPage from '../../error/ErrorPage/ErrorPage'
import Hotels from "../hotelToolsComponents/Hotels/Hotels";
import NoData from "../hotelToolsComponents/NoData/NoData";

const FavouriteHotels = () => {
    let [hotels, error, isLoading] = useRequest("getFavouriteHotels", [], []);
    const jsx = <Hotels type="favourite" header="My Favourite" data={hotels.likedHotels} />;
    const jsxNoData = <>
        <NoData
                header="Looks like you haven't liked any hotels yet!"
                content="Like the first one!"
                buttonValue="All Hotels"
                buttonLink="/home"
            />
    </>

    return renderHotels(hotels.likedHotels, error, isLoading, jsx, jsxNoData);
}

export default FavouriteHotels;