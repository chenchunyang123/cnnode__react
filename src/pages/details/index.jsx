import React, { Component } from 'react';
import './style.less';
// 文章内容组件
import TextDetail from '../../components/TextDetail/TextDetail';
// 回复内容组件
import ReplayList from '../../components/ReplayList/ReplyList';


// 引入假数据
import data from './data';

class Details extends Component {
    render() {
        return (
            <div className="detail_wrap">
                <TextDetail
                    loading={false}
                    data={data.data}
                />
                <ReplayList
                    loading={false}
                    replies={data.data.replies}
                    replyCount={data.data.reply_count}
                />
            </div>
        )
    }
}

export default Details;
