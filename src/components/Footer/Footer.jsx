import React, { Component } from 'react';
import { Layout } from 'antd';

class Footer extends Component {
    shouldComponentUpdate() {
        // 暂时不更新
        return false;
    }
    render() {
        console.log("底部渲染一次");
        return (
            <Layout.Footer style={{
                textAlign: "center"
            }}>
                CNode 社区为国内最专业的 Node.js 开源技术社区，致力于 Node.js 的技术研究。
            </Layout.Footer>
        );
    }
}

export default Footer;
