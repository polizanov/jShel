import { Navigate } from 'react-router-dom';
import useAuthInfo from '../hooks/useAuthInfo';

export const isGuest = (Component) => {
    return (props) => {
        const { isAutenticated } = useAuthInfo();
      
        if(isAutenticated) {
            return <Navigate to="/home" />
        }

        return <Component {...props}/>
    }

}

export default isGuest;

