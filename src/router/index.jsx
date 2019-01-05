import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import App from '../App/App';

// 引入引用程序的拓展方法(dispatch与state)
import { deal } from '../store/store.js';

export default (
    <HashRouter>
        {/* <App></App> */}
        <Route path="/" component={deal(App)}></Route>
    </HashRouter>
)