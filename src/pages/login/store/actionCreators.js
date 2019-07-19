import Axios from "axios";
import {constants} from "./index";

function setLoginStatus(status) {
    return {
        type: constants.SET_LOGIN_STATUS,
        status: status
    };
}

export function login(username, password) {
    return (dispatch) => {
        Axios.get('/api/login.json?username=' + username + '&password=' + password).then((res) => {
            dispatch(setLoginStatus(res.data.data.login_status));
        });
    }
}

export function logout() {
    return (dispatch) => {
        Axios.get('/api/logout.json').then((res) => {
            dispatch(setLoginStatus(res.data.data.login_status));
        });
    }
}
