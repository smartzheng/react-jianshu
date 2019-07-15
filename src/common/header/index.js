import React, {Component} from 'react';
import {
    HeaderWrapper,
    Logo,
    NavItem,
    NavDiv,
    NavSearch,
    NavSearchWrapper,
    SearchSuggestion,
    SearchSuggestionTitle,
    SearchSuggestionChange,
    SearchSuggestionItems,
    SearchSuggestionItem
} from './style'
import {CSSTransition} from 'react-transition-group';
import {connect} from 'react-redux'
import {actionCreators} from "./store";


class Header extends Component {
    constructor(props) {
        super(props);
        this.changeIcon = React.createRef();
    }

    render() {
        const {focused, totalPage, handleSearchFocus, handleSearchBlur} = this.props;
        return (<HeaderWrapper>
            <NavDiv>
                <Logo/>
                <NavItem className={'nav-home'}>首页</NavItem>
                <NavItem className={'nav-download'}>下载APP</NavItem>
                <NavSearchWrapper>
                    <CSSTransition
                        in={focused}
                        timeout={500}
                        classNames='slide'>
                        <NavSearch onFocus={() => handleSearchFocus(totalPage)}
                                   onBlur={handleSearchBlur}
                                   className={focused ? 'focused' : ''}/>
                    </CSSTransition>
                    <i className={focused ? 'focused iconfont search-icon' : 'iconfont search-icon'}>&#xe614;</i>
                    {this.getSearchList()}
                </NavSearchWrapper>
            </NavDiv>
            <NavDiv>
                <NavItem className={'nav-font'}>Aa</NavItem>
                <NavItem className={'nav-login'}>登录</NavItem>
                <NavItem className={'nav-reg'}>注册</NavItem>
                <NavItem className={'nav-write'}>写文章</NavItem>
            </NavDiv>
        </HeaderWrapper>);
    }

    getSearchList() {
        const {focused, currentPage, totalPage, searchList, isMouseIn, handleSearchListChange, handleOnMouseMove} = this.props;
        let items = [];
        let jsList = searchList.toJS();
        if (jsList.length > 0) {
            for (let i = (currentPage - 1) * 10; i < currentPage * 10; i++) {
                items.push(<SearchSuggestionItem
                    key={jsList[i]}>{jsList[i]}</SearchSuggestionItem>)
            }
        }
        if (focused || isMouseIn) {
            return (<SearchSuggestion onMouseEnter={() => handleOnMouseMove(true)}
                                      onMouseLeave={() => handleOnMouseMove(false)}>
                <SearchSuggestionTitle>热门搜索</SearchSuggestionTitle>
                <SearchSuggestionChange
                    onClick={() => handleSearchListChange(currentPage, totalPage, this.changeIcon)}>
                    <i className="iconfont spin" ref={this.changeIcon}>&#xe851;</i>
                    换一换
                </SearchSuggestionChange>
                <SearchSuggestionItems>
                    {items}
                </SearchSuggestionItems>
            </SearchSuggestion>);
        } else {
            return null;
        }
    };
}

const mapStateToProps = (state) => {
    return {
        focused: state.getIn(['header', 'focused']),
        currentPage: state.getIn(['header', 'currentPage']),
        totalPage: state.getIn(['header', 'totalPage']),
        isMouseIn: state.getIn(['header', 'isMouseIn']),
        searchList: state.getIn(['header', 'searchList'])
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        handleSearchFocus(totalPage) {
            //获取搜索建议数据
            if (totalPage === 0) {
                dispatch(actionCreators.getSearchSuggestionAction());
            }
            dispatch(actionCreators.focusedAction())
        },
        handleSearchBlur() {
            dispatch(actionCreators.blurAction())
        },
        handleSearchListChange(currentPage, totalPage, changeIcon) {
            let originalAngle = changeIcon.current.style.transform.replace(/[^0-9]/ig, '');
            console.log(changeIcon.current)
            if (originalAngle) {
                originalAngle = parseInt(originalAngle)
            } else {
                originalAngle = 0
            }
            changeIcon.current.style.transform = 'rotate(' + (originalAngle + 360) + 'deg)';
            let newPage = currentPage + 1 === totalPage ? 1 : currentPage + 1;
            dispatch(actionCreators.searchChangeAction(newPage))
        },
        handleOnMouseMove(isMouseIn) {
            dispatch(actionCreators.mouseMoveAction(isMouseIn))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);