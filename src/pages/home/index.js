import React, {PureComponent} from 'react';
import {
    HomeWrapper,
    HomeLeft,
    HomeRight,
    Banner,
} from "./style";
import List from "./components/List";
import {connect} from 'react-redux'
import {actionCreators} from "./store";
import RecommendList from "./components/RecommendList";
import WriterList from "./components/WriterList";

class Home extends PureComponent {
    render() {
        const {bannerUrl, listPage, totalPage} = this.props;
        return (
            <HomeWrapper>
                <HomeLeft>
                    <Banner imgUrl={bannerUrl}/>
                    <List/>
                    <div hidden={listPage <= totalPage} className={'no-more'}>没有更多了~</div>
                </HomeLeft>
                <HomeRight>
                    <RecommendList/>
                    <WriterList/>
                </HomeRight>
            </HomeWrapper>
        );
    };

    componentDidMount() {
        this.props.getHomeList();
        this.bindEvents();
    }

    componentWillUnmount() {
        this.unBindEvents();
    }

    bindEvents() {
        window.addEventListener('scroll', () => this.props.handleScrollChange(this.props));
    }

    unBindEvents() {
        window.removeEventListener('scroll', () => this.props.handleScrollChange(this.props));
    }
}

const mapState = (state) => {
    return {
        bannerUrl: state.getIn(['home', 'bannerUrl']),
        listPage: state.getIn(['home', 'listPage']),
        totalPage: state.getIn(['home', 'totalPage'])
    };
};
const mapDispatch = (dispatch) => {
    return {
        getHomeList: () => {
            dispatch(actionCreators.getHomeData());
        },
        handleScrollChange: (props) => {
            //加载更多
            const {listPage, totalPage} = props;
            //文档内容实际高度（包括超出视窗的溢出部分）
            const scrollHeight = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight);
            //滚动条滚动距离
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
            //窗口可视范围高度
            const clientHeight = window.innerHeight || Math.min(document.documentElement.clientHeight, document.body.clientHeight);
            if (clientHeight + scrollTop >= scrollHeight && listPage <= totalPage) {
                dispatch(actionCreators.getMoreList(listPage));
            }
        }
    }
};
export default connect(mapState, mapDispatch)(Home);