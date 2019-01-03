import React from 'react';
import { render } from 'react-dom';
import routes from './router/index.jsx';

// 引入redux
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
// 引入处理好的reducer
import reducers from './reducers/index';

const newcreateStore = applyMiddleware(thunk)(createStore);
const store = newcreateStore(reducers);

render((
    <Provider store={store}>
        {routes}
    </Provider>
), document.getElementById('root'));
