import ErrorPage from "../components/error/ErrorPage/ErrorPage";

const renderHotels = (data, error, isLoading, jsx, jsxNoData) => {
    if (isLoading) {
        return <p>Loading...</p>
    }

    if(!data) {
        return <p>Loading...</p>
    }

    if (error) {
        return <ErrorPage message={error} />;
    }

    if(Array.isArray(data)){
        if (data.length == 0) {
            return jsxNoData
        }
    }

    return jsx;
}

export default renderHotels;