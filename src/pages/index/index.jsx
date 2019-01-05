import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Row, Col } from 'antd';
import './style.less';

// 引入右侧的列表list
import IndexList from '../../components/List/list';

class Index extends Component {
    constructor(props) {
        super(props);
        let now = this.getNow(this.props.location);
        this.state = {
            now
        }
    }

    getNow(location) {
        let now = location.pathname.split("/")[2];
        return now;
    }

    render() {
        let { match, dispatch, state } = this.props;
        let tab = match.params.id;
        return (
            <Row className="wrap-content">
                <Col md={6}>
                    <Menu className="indexMenu" selectedKeys={[this.state.now]}>
                        <Menu.Item key="all">
                            <Link to="/index/all" replace>全部</Link>
                        </Menu.Item> 
                        <Menu.Item key="good">
                            <Link to="/index/good" replace>精华</Link>
                        </Menu.Item> 
                        <Menu.Item key="ask">
                            <Link to="/index/ask" replace>问题</Link>
                        </Menu.Item> 
                        <Menu.Item key="share">
                            <Link to="/index/share" replace>分享</Link>
                        </Menu.Item>   
                        <Menu.Item key="job">
                            <Link to="/index/job" replace>招聘</Link>
                        </Menu.Item> 
                        <Menu.Item key="dev">
                            <Link to="/index/dev" replace>测试</Link>
                        </Menu.Item> 
                    </Menu>
                </Col>
                <Col 
                    md={18} 
                    className="indexList"
                >
                    <IndexList 
                        tab={tab}
                        dispatch={dispatch}
                        state={state.list}
                    />
                </Col>
            </Row>
        );
    }
}

export default Index;
