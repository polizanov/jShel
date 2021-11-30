import { useEffect, useState } from "react";
import requestNames from './requestNames'


const useRequest = (name, depArray, initialStateValue) => {
    const [data, setData] = useState(initialStateValue);
    const [errorMessage, setErrorMessage] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [id] = depArray;

    useEffect(() => {
        setIsLoading(true);
        requestNames[name](id ? id : null)
            .then(effectData => {
                setTimeout(() => {
                    setData(effectData);
                    setIsLoading(false);
                }, 500)
            })
            .catch(err => {
                setErrorMessage(err.message);
                setIsLoading(false);
            })
    }, depArray)

    return [data, errorMessage, isLoading];
}

export default useRequest