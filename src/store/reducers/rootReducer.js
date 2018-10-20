import aboutReducer from './aboutReducer';
import workReducer from './workReducer';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
    work:workReducer,
    about:aboutReducer
});

export default rootReducer