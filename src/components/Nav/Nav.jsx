import React, { Component } from 'react';
import { Menu, Icon } from "antd";
import { Link } from "react-router-dom";

class Nav extends Component {
    render() {
        let { mode, id } = this.props;
        return (
            <Menu mode={mode} id={id}>
                <Menu.Item>
                    <Link to="/index" replace><Icon type="home" />首页</Link>
                </Menu.Item>
                <Menu.Item>
                    <Link to="/book" replace><Icon type="book" />新手入门</Link>
                </Menu.Item>
                <Menu.Item>
                    <Link to="/about" replace><Icon type="info-circle-o" />关于</Link>
                </Menu.Item>
            </Menu>
        );
    }
}

export default Nav;
