import * as Constants from './constants'
import {fromJS} from "immutable";

const defaultState = fromJS({
    focused: false
});
export default (state = defaultState, action) => {
    switch (action.type) {
        case Constants.ACTION_FOCUSED: {
            return state.set('focused', true)

        }
        case Constants.ACTION_BLUR: {
            return state.set('focused', false)
        }
        default:
            return state
    }
};
