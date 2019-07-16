import Axios from "axios";
import {fromJS} from "immutable";
import {constants} from "./index";

function addHomeList(list, nextPage) {
    return {
        type: constants.ADD_HOME_LIST,
        list: fromJS(list),
        nextPage:fromJS(nextPage)
    };
}

function setHomeData(data) {
    return {
        type: constants.SET_HOME_DATA,
        data: fromJS(data)
    }
};

export function getMoreList(page) {
    return (dispatch) => {
        Axios.get('/api/homeMore.json?page=' + page).then(
            (res) => {
                dispatch(addHomeList(res.data.data, page + 1))
            }
        )
    }
}

export const getHomeData = () => {
    return (dispatch) => {
        Axios.get('/api/home.json').then(
            (res) => {
                dispatch(setHomeData(res.data.data))
            }
        )
    }
};
