import React from 'react';
import { render } from 'react-dom';
import routes from './router/index.jsx';

import { Provider } from 'react-redux';
// 引入处理好的store
import { store } from './store/store';

render((
    <Provider store={store}>
        {routes}
    </Provider>
), document.getElementById('root'));
