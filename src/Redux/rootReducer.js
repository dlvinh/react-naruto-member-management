import {combineReducers} from 'redux';
import appStateReducer from './appReducer';
export const rootReducer = combineReducers({
    appStateReducer : appStateReducer
}) 