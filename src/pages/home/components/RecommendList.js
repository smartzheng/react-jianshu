import React, {Fragment, PureComponent} from 'react'
import {connect} from 'react-redux'
import {
    RecommendItem
} from "../style";

class RecommendList extends PureComponent {
    render() {
        const {recommendList} = this.props;
        return (<Fragment>
            {recommendList.map((item) => {
                return <RecommendItem key={item.get('id')}>
                    <img className={'img'} src={item.get('imgUrl')} alt=''/>
                </RecommendItem>
            })
            }
        </Fragment>)
    }
}


const mapState = (state) => {
    return {
        recommendList: state.getIn(['home', 'recommendList'])
    }
};

export default connect(mapState, null)(RecommendList);