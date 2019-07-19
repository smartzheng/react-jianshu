import Axios from "axios";
import {constants} from "./index";

export const getDetail = (id) => {
    return (dispatch) => {
        Axios.get('/api/detail.json?id=' + id).then((res) => {
            dispatch(setDetail(res.data.data));
        })
    }
};

const setDetail = (data) => {
    return {
        type: constants.SET_DETAIL_DATA,
        data: data
    }
};
