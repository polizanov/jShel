import { render } from "@testing-library/react";
import useRequest from "../../../hooks/useRequest/useRequest";

import RenderHotels from "../../../tools/RenderHotels";
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

    return <RenderHotels
        data={hotels}
        error={error}
        isLoading={isLoading}
        jsx={jsx}
        jsxNoData={jsxNoData}
    />
}

export default FavouriteHotels;