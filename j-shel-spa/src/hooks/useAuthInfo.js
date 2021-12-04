import { useContext } from "react";
import AuthContext from "../context/authContext/AuthContext";

const useAuthInfo = () => {
    const user = useContext(AuthContext);

    return user;
}

export default useAuthInfo;