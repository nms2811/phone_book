import { combineReducers } from 'redux';
import todos from './PhoneReducer';
import visibilityFilter from './FilterReducer'

export default combineReducers ({
    todos,
    visibilityFilter
})