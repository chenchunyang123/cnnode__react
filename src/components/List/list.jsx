import React, { Component } from 'react';
import { List, Avatar } from "antd";
import { Link, withRouter } from 'react-router-dom';
import './list.less';
// 引入假数据
// import data from '../../pages/index/data';

// 引入axios
import axios from 'axios';

// 引入标签
import TextTag from "../../components/TextTag/TextTag";

class IndexList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 1,
        }
        this.getData(this.props.tab, this.state.page);
    }

    shouldComponentUpdate(nextProps, nextState) {
        if(this.state.page !== nextState.page) {
            this.getData(this.props.tab, nextState.page);
            return false;
        }
        return true;
    }

    getData(tab, page) {
        this.props.dispatch(dispatch => {
            axios.get(`https://cnodejs.org/api/v1/topics?tab=${tab}&page=${page}&limit=10`)
                    .then(res => {
                        dispatch({
                            type: "LIST_UPDATA_SUCCESS",
                            data: res.data.data
                        })
                    })
                    .catch(err => {
                        dispatch({
                            type: "LIST_UPDATA_ERROR",
                            data: err
                        })
                    })
        })
    }

    render() {
        console.log("主列表被渲染了")
        let { loading, data } = this.props.state;
        let pagination = {
            current: this.state.page,
            pageSize: 10,
            total: 100,
            onChange: ((current) => {
                this.setState({
                    page: current
                })
            })
        }
        return (
            <List
                loading={loading}
                dataSource={data}
                pagination={loading?false:pagination}
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

export default withRouter(IndexList);
