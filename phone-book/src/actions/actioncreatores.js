import { ADD_PHONE, REMOVE_PHONE, SET_VISIBILITY_FILTER } from './actiontypes';

let phoneId = 0;

export const addphone = payload => ({
    type: ADD_PHONE,
    id: phoneId++,
    payload
})

export const removephone = (id) => ({
    tyoe:REMOVE_PHONE,
    id:id
})

export const setVisibilityFilter = filter => ({
    type: SET_VISIBILITY_FILTER,
    filter
})