import useRequest from "../../../hooks/useRequest/useRequest";
import RenderHotels from "../../../tools/RenderHotels";

import Hotels from "../../hotels/hotelToolsComponents/Hotels/Hotels";
import NoData from '../../hotels/hotelToolsComponents/NoData/NoData';

import isAuth from '../../../hoc/isAuth'

const AuthenticatedHome = () => {
    let [hotelsData, errorMessage, isLoading] = useRequest("getAllHotels", [], {});
    const jsx = <>
        {hotelsData.goldenArea?.length > 0 ?
            <Hotels type="gold" header="Gold Area" data={hotelsData.goldenArea} /> :
            <NoData header="Looks like no one has added a hotel yet!"
                content="Be the first!"
                buttonValue="Add Hotel"
                buttonLink="/create" />}
        {hotelsData.hotels?.length > 0 ?
            <Hotels type="normal" header="All Hotels" data={hotelsData?.hotels} />
            : ""}
    </>

    return <RenderHotels
        data={hotelsData}
        error={errorMessage}
        isLoading={isLoading}
        jsx={jsx}
    />
}

export default isAuth(AuthenticatedHome);