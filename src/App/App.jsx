import React, { Component } from 'react';
import { Switch, Route, Redirect } from "react-router-dom";
import { Layout } from 'antd';
import './App.less';

// 引入各个页面组件
import Index from '../pages/index/index.jsx';
import Book from '../pages/book';
import About from '../pages/about';
import Details from '../pages/details';
import User from '../pages/user';

// 引入公共组件
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

// 引入拓展程序组件的方法
import { deal } from '../store/store.js';

class App extends Component {
    shouldComponentUpdate(nextprops, nextstate) {
        // 判断当前的hash路径是否相同，不相同才更新，避免组件重复渲染
        if(nextprops.location.pathname !== this.props.location.pathname) {
            return true;
        }
        return false;
    }
     render() {
        return (
            <div className="pageWrap">
                <Header></Header>
                <Layout.Content>
                    <Switch>
                        <Route path="/index/:id" component={deal(Index)}></Route>
                        <Route path="/book" component={deal(Book)}></Route>
                        <Route path="/about" component={deal(About)}></Route>
                        <Route path="/details/:id" component={deal(Details)}></Route>
                        <Route path="/user/:id" component={deal(User)}></Route>
                        {/* 定位到主页 */}
                        <Redirect from="*" to="/index/all" component={deal(Index)}></Redirect>
                    </Switch>
                </Layout.Content>
                <Footer></Footer>
            </div>
        );
    }
}

export default App;
