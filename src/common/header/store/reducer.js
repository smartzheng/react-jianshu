import * as Constants from './constants'
import {fromJS} from "immutable";

const defaultState = fromJS({
    focused: false,
    searchList: [],
    currentPage: 1,
    totalPage: 0,
    isMouseIn: false
});
export default (state = defaultState, action) => {
    switch (action.type) {
        case Constants.ACTION_FOCUSED: {
            return state.set('focused', true)
        }
        case Constants.ACTION_BLUR: {
            return state.set('focused', false)
        }
        case Constants.ACTION_MOUSE_MOVE: {
            return state.set('isMouseIn', action.isMouseIn)
        }
        case Constants.ACTION_SEARCH_CHANGE: {
            return state.set('currentPage', action.newPage)
        }
        case Constants.ACTION_ADD_SEARCH_LIST: {
            return state.merge({
                searchList: action.list,
                totalPage: Math.ceil(action.list.size / 10),
            })
        }
        default:
            return state
    }
};
