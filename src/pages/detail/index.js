import React, {PureComponent} from 'react';
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import {DetailWrapper} from "./style";
import {actionCreators} from "./store";
import {Title, Content} from './style'

class Detail extends PureComponent {
    render() {
        const {title, content} = this.props;
        return (
            <DetailWrapper>
                <article>
                    <Title>{title + '——' + this.props.match.params.id}</Title>
                    <Content dangerouslySetInnerHTML={{__html: content}}/>
                </article>
            </DetailWrapper>
        );
    };

    componentDidMount() {
        this.props.getDetail(this.props.match.params.id);
    }
}

const mapState = (state) => {
    return {
        title: state.getIn(['detail', 'title']),
        content: state.getIn(['detail', 'content']),
    };
};

const mapDispatch = (dispatch) => {
    return {
        getDetail: (id) => {
            dispatch(actionCreators.getDetail(id))
        }
    }
};
export default connect(mapState, mapDispatch)(withRouter(Detail));