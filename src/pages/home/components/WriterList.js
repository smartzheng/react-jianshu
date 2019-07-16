import React, {Fragment, PureComponent} from 'react'
import {connect} from 'react-redux'
import {
    WriterItem,
    WriterListWrapper,
    WriterListTitleWrapper
} from "../style";

class WriterList extends PureComponent {
    render() {
        const {writerList} = this.props;
        return (<Fragment>
            <WriterListTitleWrapper>
                <span className={'title'}>热门搜索</span>
                <span className={'change'}>
                <i className="iconfont spin" ref={this.changeIcon}>&#xe851;</i>
                换一换
            </span>
            </WriterListTitleWrapper>
            <WriterListWrapper>
                {writerList.map((item) => {
                    return WriterList.getWriterItem(item)
                })}
            </WriterListWrapper>
        </Fragment>)
    }

    static getWriterItem(item) {
        return <WriterItem key={item.get('id')}>
            <img className={'avatar'} src={item.get('avatar')} alt=''/>
            <span className={'writer-info'}>
                        <div className={'name'}>{item.get('name')}</div>
                        <div className={'desc'}>{item.get('desc')}</div>
                    </span>
            <span className={'follow'}>+关注</span>
        </WriterItem>;
    }
}


const mapState = (state) => {
    return {
        writerList: state.getIn(['home', 'writerList'])
    }
};

export default connect(mapState, null)(WriterList);