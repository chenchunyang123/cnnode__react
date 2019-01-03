import { combineReducers } from 'redux';

// 引入相关的reducer方法
import list from './list';
import details from './details';
import user from './user';

const reducer = combineReducers({
    list,
    details,
    user
})

export default reducer;