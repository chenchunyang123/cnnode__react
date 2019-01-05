import React, { Component } from 'react';
import { Layout, Row, Col, Divider, Icon, Dropdown, Button } from 'antd';
import Nav from '../Nav/Nav';
import "./Header.less";


class Header extends Component {
    shouldComponentUpdate() {
        // 暂时不更新
        return false;
    }
    render() {
        console.log("头部渲染一次")
        return (
            <Layout.Header>
                <Row className="wrap">
                    <Col md={6} xs={24}>
                        <h1 id="logo">cNode</h1>
                    </Col>
                    <Col md={18} xs={0}>
                        <Divider type="vertical" className="headerDivider"/>
                        <Nav id="nav" mode="horizontal"/>
                    </Col>
                    <Col md={0} xs={24} className="xsNav">
                        <Dropdown 
                            overlay={
                                <Nav mode="vertical" id="xsNav"/>
                            }
                            trigger={['click', 'touchend']}

                        >
                            <Button><Icon type="bars" /></Button>
                        </Dropdown>
                    </Col>
                </Row>
            </Layout.Header>
        );
    }
}

export default Header;
