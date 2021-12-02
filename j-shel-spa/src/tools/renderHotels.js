import Loading from "../components/error/Loading/Loading";
import NoData from "../components/hotels/hotelToolsComponents/NoData/NoData";

const RenderHotels = ({ data, error, isLoading, jsx, jsxNoData = null }) => {

    if (isLoading) {
        return <Loading />
    }

    if (!data) {
        return <Loading />
    }

    if (error) {
        return <NoData 
            header="Sorry, but your request could not be processed!"
            content={error}
            buttonValue="Click to refresh"
            buttonLink="/" 
            isNeedLink={false}
            />
    }

    if (Array.isArray(data)) {
        if (data.length === 0) {
            return jsxNoData
        }
    }

    return jsx;
}

export default RenderHotels;