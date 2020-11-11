import { reloadCartReducer }  from './pages';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
    reloadCart : reloadCartReducer
});

export default allReducers;