import React from 'react';
import {HeaderWrapper, Logo, NavItem, NavDiv, NavSearch, NavSearchWrapper} from './style'
import {CSSTransition} from 'react-transition-group';
import {connect} from 'react-redux'
import {actionCreators} from "./store";


const Header = (props) => {
    const {focused, handleSearchFocus, handleSearchBlur} = props;
    return (<HeaderWrapper>
        <NavDiv>
            <Logo/>
            <NavItem className={'nav-home'}>首页</NavItem>
            <NavItem className={'nav-download'}>下载APP</NavItem>
            <NavSearchWrapper>
                <CSSTransition
                    in={focused}
                    timeout={500}
                    classNames='slide'
                >
                    <NavSearch onFocus={handleSearchFocus}
                               onBlur={handleSearchBlur}
                               className={focused ? 'focused' : ''}/>
                </CSSTransition>
                <i className={focused ? 'focused iconfont' : 'iconfont'}>&#xe614;</i>
            </NavSearchWrapper>
        </NavDiv>
        <NavDiv>
            <NavItem className={'nav-font'}>Aa</NavItem>
            <NavItem className={'nav-login'}>登录</NavItem>
            <NavItem className={'nav-reg'}>注册</NavItem>
            <NavItem className={'nav-write'}>写文章</NavItem>
        </NavDiv>
    </HeaderWrapper>);
};

const mapStateToProps = (state) => {
    return {
        focused: state.getIn(['header', 'focused'])
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        handleSearchFocus() {
            dispatch(actionCreators.createFocusedAction())
        },
        handleSearchBlur() {
            dispatch(actionCreators.createBlurAction())
        },
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);