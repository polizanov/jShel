import ErrorPage from "../components/error/ErrorPage/ErrorPage";
import Loading from "../components/error/Loading/Loading";

const renderHotels = (data, error, isLoading, jsx, jsxNoData) => {
    if (isLoading) {
        return <Loading />
    }

    if(!data) {
        return <Loading />
    }

    if (error) {
        return <ErrorPage message={error} />;
    }

    if(Array.isArray(data)){
        if (data.length === 0) {
            return jsxNoData
        }
    }

    return jsx;
}

export default renderHotels;