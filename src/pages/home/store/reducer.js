import {fromJS} from "immutable";
import * as constants from "./constants";

const defaultState = fromJS({
    articleList: [],
    recommendList: [],
    writerList: [],
    listPage: 1,
    totalPage: 1,
    bannerUrl: ''
});

export default (state = defaultState, action) => {
    switch (action.type) {
        case constants.SET_HOME_DATA:
            return state.merge({
                articleList: action.data.get('articleList'),
                bannerUrl: action.data.get('bannerUrl'),
                recommendList: action.data.get('recommendList'),
                totalPage: action.data.get('totalPage'),
                writerList: action.data.get('writerList'),
                listPage: 1
            });
        case constants.ADD_HOME_LIST:
            return state.merge({
                articleList: state.get('articleList').concat(action.list),
                listPage: action.nextPage
            });
        default :
            return state
    }
}