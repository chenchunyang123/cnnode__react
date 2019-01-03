import React, { Component } from 'react';
import './ReplyList.less';

import { List, Avatar, Card } from 'antd';
import { Link } from 'react-router-dom';


class ReplyList extends Component {
    render() {
        let { replyCount, replies, loading } = this.props;
        return (
            <div className="reply_wrap">
                <Card
                    loading={loading}
                    title={replyCount+"条回复"}
                    type="inner"
                >
                    <List
                        itemLayout="vertical"
                        dataSource={replies}
                        renderItem={(item) => (
                            <List.Item
                                key={item.id}
                                extra={item.ups.length>0?<span>有{item.ups.length}人觉得很赞</span>:''}
                            >
                                <List.Item.Meta
                                    avatar={<Avatar src={item.author.avatar_url} />}
                                    description={<div>
                                        <Link to={"/user/" + item.author.loginname}>{item.author.loginname}</Link>
                                        <span style={{marginLeft: "5px"}}>发表于：{item.create_at.split("T")[0]}</span>
                                    </div>}
                                />
                                <div
                                    dangerouslySetInnerHTML={{
                                        __html: item.content
                                    }}
                                ></div>
                            </List.Item>
                        )}
                    >

                    </List>
                </Card>
            </div>
        );
    }
}

export default ReplyList;
