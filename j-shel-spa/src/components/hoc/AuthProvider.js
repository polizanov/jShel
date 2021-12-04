import { useState } from "react"
import AuthContext from "../../context/authContext/AuthContext"

const initialState = {
    email: "",
    sessionToken: "",
    userId: "",
    username: ""
}

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(initialState);

    const addUserInfo = (data) => {
        setUser(data)
    }

    const removeUserInfo = () => {
        setUser(initialState);
    }

    return (
        <AuthContext.Provider value={{user, addUserInfo, removeUserInfo}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;