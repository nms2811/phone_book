import { ADD_PHONE, REMOVE_PHONE } from '../actions/actiontypes';

const initial_data = [];

const phoneStates = (state = initial_data, action) => {
    switch (action.type) {
        case ADD_PHONE:
            return [
                ...state,{
                    id: action.id,
                    payload: action.payload
                }
            ]
        case REMOVE_PHONE:
            const numIndex = parseInt(action.id);
            return state.filter(phone_state => phone_state.id != numIndex);
        default:
            return state;
    }
}

export default phoneStates;