import { useEffect, useState } from "react";
import useAuthInfo from "../useAuthInfo";
import requestNames from './requestNames'


const useRequest = (name, depArray, initialStateValue) => {
    const { user } = useAuthInfo();
    const [data, setData] = useState(initialStateValue);
    const [errorMessage, setErrorMessage] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [id] = depArray;

    useEffect(() => {
        setIsLoading(true);
        requestNames[name](id ? id : null, user.sessionToken)
            .then(effectData => {
                setData(effectData);
                setIsLoading(false);
            })
            .catch(err => {
                setErrorMessage(err.message);
                setIsLoading(false);
            })
    }, depArray)

    return [data, errorMessage, isLoading, setData];
}

export default useRequest