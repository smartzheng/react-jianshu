import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import {
    ListWrapper,
    ListItem,
    ListItemInfo,
} from "../style";

class List extends PureComponent {
    render() {
        const {articleList} = this.props;
        return (<ListWrapper>
            {
                articleList.map((item, index) => {
                    return <ListItem key={index}>
                        <ListItemInfo>
                            <h3 className={'title'}>{item.get('title')}</h3>
                            <p className={'desc'}>{item.get('desc')}</p>
                        </ListItemInfo>
                        <img hidden={!item.get('imgUrl')} className={'img'} src={item.get('imgUrl')} alt=''/>
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