import {ACTION_BLUR, ACTION_FOCUSED} from './constants'

export const createFocusedAction = () => {
    return {
        type: ACTION_FOCUSED
    };
};

export const createBlurAction = () => {
    return {
        type: ACTION_BLUR
    };
};