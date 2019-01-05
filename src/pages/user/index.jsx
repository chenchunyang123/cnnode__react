import React, { Component } from 'react';
import { Avatar, Row, Col } from 'antd';
import './style.less';

import axios from 'axios';
// import data from './data';

// 引入userlist组件
import UserList from '../../components/UserList/UserList';

class User extends Component {
    constructor(props) {
        super(props);
        let id = this.props.match.params.id;
        this.getData(id);
    }

    getData(id) {
        this.props.dispatch(dispatch => {
            dispatch({
                type: "USER_UPDATA"
            });
            axios.get(`https://cnodejs.org/api/v1/user/${id}`)
                    .then(res => {
                        dispatch({
                            type: "USER_UPDATA_SUCCESS",
                            data: res.data
                        })
                    })
                    .catch(error => {
                        dispatch({
                            type: "USER_UPDATA_ERROR"
                        })
                    })
        })
    }

    render() {
        let { loading, data } = this.props.state.user;
        let { avatar_url, loginname, create_at, score, recent_topics, recent_replies } = data;
        return (
            <div className="user_wrap">
                <Avatar src={avatar_url} className="userAvatar"/>
                <Row className="user_info">
                    <Col md={8}>
                        用户名: <a>{loginname}</a>
                    </Col>
                    <Col md={8}>
                        积分：<a>{score}</a>
                    </Col>
                    <Col md={8}>
                        注册时间：<a>{create_at.split("T")[0]}</a>
                    </Col>
                </Row>
                <UserList
                    loading={loading}
                    title="最近创建的话题"
                    data={recent_topics}
                />
                <UserList
                    loading={loading}
                    title="最近回复的话题"
                    data={recent_replies}
                />
            </div>
        );
    }
}

export default User;
