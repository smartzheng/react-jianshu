import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import {
    ListWrapper,
    ListItem,
    ListItemInfo,
} from "../style";
import {Link} from "react-router-dom";

class List extends PureComponent {
    render() {
        const {articleList} = this.props;
        return (<ListWrapper>
            {
                articleList.map((item, index) => {
                    return <ListItem key={index}>
                        <ListItemInfo>
                            <Link to={'/detail/' + item.get('id')}>
                                <h3 className={'title'}>{item.get('title')}</h3>
                            </Link>
                            <Link to={'/detail/' + item.get('id')}>
                                <p className={'desc'}>{item.get('desc')}</p>
                            </Link>
                        </ListItemInfo>
                        <img hidden={!item.get('imgUrl')} className={'img'} src={item.get('imgUrl')}
                             alt=''/>
                    </ListItem>
                })
            }

        </ListWrapper>)
    }
}


const mapState = (state) => {
    return {
        articleList: state.getIn(['home', 'articleList'])
    }
};
const mapDispatch = (dispatch) => {
    return {};
};
export default connect(mapState, mapDispatch)(List);