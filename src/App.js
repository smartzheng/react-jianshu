import React, {Component} from 'react';
import Header from "./common/header";
import {GlobalStyle} from "./style";
import {IconfontStyle} from "./statics/iconfont/iconfont";
import store from './store'
import {Provider} from 'react-redux'
import Home from "./pages/home";
import Login from "./pages/login";
import {BrowserRouter, Route} from "react-router-dom";
import loadable from "./common/loadable";

const Detail = loadable(() => import("./pages/detail"));

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Provider store={store}>
                    <GlobalStyle/>
                    <IconfontStyle/>
                    <Header/>
                    <Route path={'/'} exact component={Home}/>
                    <Route path={'/login'} exact component={Login}/>
                    <Route path={'/detail/:id'} exact component={Detail}/>
                </Provider>
            </BrowserRouter>
        );
    }
}

export default App;
