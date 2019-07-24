import * as constants from './constants'
import Axios from "axios";
import {fromJS} from 'immutable'

export function mouseMoveAction(isMouseIn) {
    return {
        type: constants.ACTION_MOUSE_MOVE,
        isMouseIn
    };
}

export const focusedAction = () => {
    return {
        type: constants.ACTION_FOCUSED
    };
};

export const blurAction = () => {
    return {
        type: constants.ACTION_BLUR
    };
};

export const searchChangeAction = (newPage) => {
    return {
        type: constants.ACTION_SEARCH_CHANGE,
        newPage
    };
};
const addSearchListAction = (list) => {
    return {
        type: constants.ACTION_ADD_SEARCH_LIST,
        list: fromJS(list),
        totalPage: Math.ceil(list.length / 10)
    };
};
export const getSearchSuggestionAction = () => {
    return (dispatch) => {
        Axios.get('/api/headerlist.json').then((res) => {
            let list = res.data.data;
            dispatch(addSearchListAction(list));
        }, () => {
            console.log('getHeaderList error!')
        })
    };
};