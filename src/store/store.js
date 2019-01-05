import { createStore, combineReducers, applyMiddleware } from 'redux';
import { connect } from 'react-redux';
import thunk from 'redux-thunk';

// 引入外部的reducers
import list from '../reducers/list';
import details from '../reducers/details';
import user from '../reducers/user';

// 定义组件接收store的state和dispatch方法
function mapStateToProps(state) {
    return { state };
}
function mapDispatchToProps(dispatch) {
    return { dispatch };
}

// 定义处理组件的方法,并暴露出去
export let deal = connect(mapStateToProps, mapDispatchToProps);

// 拓展store
const newCreateStore = applyMiddleware(thunk)(createStore);

// 暴露store
export const store = newCreateStore(combineReducers({
    list,
    details,
    user
}))