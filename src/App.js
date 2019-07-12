import React, {Component} from 'react';
import Header from "./common/header";
import {GlobalStyle} from "./style";
import {IconfontStyle} from "./statics/iconfont/iconfont";
import store from './store'
import {Provider} from 'react-redux'

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <GlobalStyle/>
                <IconfontStyle/>
                <Header/>
            </Provider>
        );
    }
}

export default App;
