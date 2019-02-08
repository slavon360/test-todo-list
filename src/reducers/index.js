import { combineReducers } from 'redux';
import todoList from './todoList';
import modals from './modals'

const rootReducer = combineReducers({
    todoList,
    modals
})

export default rootReducer;