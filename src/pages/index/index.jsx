import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Row, Col } from 'antd';
import './style.less';

// 引入右侧的列表list
import IndexList from '../../components/List/list';

class Index extends Component {
    render() {
        return (
            <Row className="wrap-content">
                <Col md={6}>
                    <Menu className="indexMenu">
                        <Menu.Item>
                            <Link to="/index/all">全部</Link>
                        </Menu.Item> 
                        <Menu.Item>
                            <Link to="/index/good">精华</Link>
                        </Menu.Item> 
                        <Menu.Item>
                            <Link to="/index/ask">问题</Link>
                        </Menu.Item> 
                        <Menu.Item>
                            <Link to="/index/share">分享</Link>
                        </Menu.Item>   
                        <Menu.Item>
                            <Link to="/index/job">招聘</Link>
                        </Menu.Item> 
                        <Menu.Item>
                            <Link to="/index/dev">测试</Link>
                        </Menu.Item> 
                    </Menu>
                </Col>
                <Col 
                    md={18} 
                    className="indexList"
                >
                    <IndexList/>
                </Col>
            </Row>
        );
    }
}

export default Index;
