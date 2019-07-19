import {fromJS} from "immutable";
import * as constants from "./constants";

const defaultState = fromJS({
    status: false
});

export default (state = defaultState, action) => {
    switch (action.type) {
        case constants.SET_LOGIN_STATUS: {
            return state.set('status',  action.status);
        }
        default :
            return state
    }
}