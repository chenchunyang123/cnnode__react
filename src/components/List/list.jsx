import React, { Component } from 'react';
import { List,Avatar } from "antd";
import { Link } from 'react-router-dom';
import './list.less';
// 引入假数据
import data from '../../pages/index/data';

// 引入标签
import TextTag from "../../components/TextTag/TextTag";

class IndexList extends Component {
    render() {
        return (
            <List
                loading={false}
                dataSource={data.data}
                renderItem={item => (<List.Item
                    actions={[
                        "回复:" + item.reply_count,
                        "访问:" + item.visit_count
                    ]}
                >
                    <List.Item.Meta 
                        avatar={<Avatar src={item.author.avatar_url} />}
                        title={<div>
                                <TextTag 
                                    data={item}
                                />
                                <Link to={"/details/" + item.id}>{item.title}</Link>
                            </div>}
                        description={<p>
                            <Link to={"/user/" + item.author.loginname}>{item.author.loginname}</Link>
                            发表于: {item.create_at.split("T")[0]}
                        </p>}
                    />
                </List.Item>)}
            >
            </List>
        );
    }
}

export default IndexList;
