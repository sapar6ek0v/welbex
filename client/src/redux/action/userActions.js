import {LOG_OUT, SIGN_IN} from "../actionTypes/userActionTypes.js";
import Cookies from "js-cookie";

export const singIn = (data) => {
    return {type: SIGN_IN, user: data.user, token: data.token}
}

export const logOut = () => {
    Cookies.remove('token')
    return {type: LOG_OUT, user: null, token: null, isAuth: false}
}