import { isAuth } from "../services/authService";

export function isAuthenticatedGuard() {
    if(!isAuth()){
        throw "unothorised"
    } 
}

export function isGuestGuard() {
    if(isAuth()) {
        throw "unothorised"
    }
}