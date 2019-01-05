import React, { Component } from 'react';
import './style.less';
import axios from 'axios';
// 文章内容组件
import TextDetail from '../../components/TextDetail/TextDetail';
// 回复内容组件
import ReplayList from '../../components/ReplayList/ReplyList';


// 引入假数据
// import data from './data';

class Details extends Component {
    constructor(props) {
        super(props);
        let id = this.props.match.params.id;
        this.getData(id);
    }

    getData(id) {
        this.props.dispatch(dispatch => {
            dispatch({
                type: "DETAILS_UPDATA"
            })
            axios.get(`https://cnodejs.org/api/v1/topic/${id}`)
                    .then((res) => {
                        dispatch({
                            type: "DETAILS_UPDATA_SUCCESS",
                            data: res.data
                        })
                    })
                    .catch((err) => {
                        dispatch({
                            type: "DETAILS_UPDATA_ERROR"
                        })
                    })
        })
    }

    render() {
        let { details } = this.props.state;
        return (
            <div className="detail_wrap">
                <TextDetail
                    loading={details.loading}
                    data={details.data}
                />
                <ReplayList
                    loading={details.loading}
                    replies={details.data.replies}
                    replyCount={details.data.reply_count}
                />
            </div>
        )
    }
}

export default Details;
