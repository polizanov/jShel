import { Navigate } from 'react-router-dom';
import useAuthInfo from '../hooks/useAuthInfo';

const isAuth = (Component) => {
    return (props) => {
        const { isAutenticated } = useAuthInfo();

        if(!isAutenticated) {
            return <Navigate to="/" />
        }

        return <Component {...props} />;
    }
}

export default isAuth;