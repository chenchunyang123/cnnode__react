import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";
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

class App extends Component {
    render() {
        return (
            <div className="pageWrap">
                <Header></Header>
                <Layout.Content>
                    <Switch>
                        <Route path="/index/:id" component={Index}></Route>
                        <Route path="/book" component={Book}></Route>
                        <Route path="/about" component={About}></Route>
                        <Route path="/details" component={Details}></Route>
                        <Route path="/user" component={User}></Route>
                        {/* 定位到主页 */}
                        <Route path="*" component={Index}></Route>
                    </Switch>
                </Layout.Content>
                <Footer></Footer>
            </div>
        );
    }
}

export default App;
