import React, { Component } from 'react';
import { Menu, Icon } from "antd";
import { Link, withRouter } from "react-router-dom";

class Nav extends Component {
    constructor(props) {
        super(props);
        let now = this.getNow(this.props.location);
        this.state = {
            now
        }
    }

    getNow(location) {
        let now = location.pathname.split("/")[1];
        return now;
    }

    // 在这个生命周期里面获取到下一个点击的路径location
    shouldComponentUpdate(nextProps, nextState) {
        let now = this.getNow(nextProps.location);
        if(now !== this.state.now) {
            this.setState({
                now
            })
            return false;
        }
        return true;
    }

    render() {
        let { mode, id } = this.props;
        return (
            <Menu 
                mode={mode} 
                id={id}
                selectedKeys={[this.state.now]}
            >
                <Menu.Item key="index">
                    <Link to="/index/all" replace><Icon type="home" />首页</Link>
                </Menu.Item>
                <Menu.Item key="book">
                    <Link to="/book" replace><Icon type="book" />新手入门</Link>
                </Menu.Item>
                <Menu.Item key="about">
                    <Link to="/about" replace><Icon type="info-circle-o" />关于</Link>
                </Menu.Item>
            </Menu>
        );
    }
}

export default withRouter(Nav);
