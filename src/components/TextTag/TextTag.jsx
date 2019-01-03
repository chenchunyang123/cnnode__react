import React, { Component } from 'react';
import { Tag } from 'antd';

// 封装一个根据请求回来的数据，改变tag标签渲染结果的方法
// 定义常量
const  tab = {
    top: {
        color: "magenta",
        txt: "置顶"
    },
    good: {
        color: "geekblue",
        txt: "精华"
    },
    job: {
        color: "orange",
        txt: "招聘"
    },
    share: {
        color: "green",
        txt: "分享"
    },
    ask: {
        color: "purple",
        txt: "问答"
    },
    dev: {
        color: "volcano",
        txt: "测试"
    }
}
// 定义方法
function tabIs(data) {
    if(data.top) {
        return "top";
    } else if(data.good) {
        return "good";
    } else {
        return data.tab;
    }
}

class TextTag extends Component {
    render() {
        let { data } = this.props;
        let now_tab = tab[tabIs(data)];
        return <Tag color={now_tab.color}>{now_tab.txt}</Tag>;
    }
}

export default TextTag;
