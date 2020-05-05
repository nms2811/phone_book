import { ADD_PHONE, REMOVE_PHONE, CALL_PHONE, EDIT_PHONE } from '../actions/actiontypes';

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
        case EDIT_PHONE:
            const edit = {
                id:action.id,
                payload:action.payload
            }
            const editId = parseInt(action.id);
            return state.map((phone_state) => {
                    if (phone_state.id == editId) {
                        return {
                            ...phoneStates,
                            ...edit
                        }   
                    }
                // }
            })
        default:
            return state;
    }
}

export default phoneStates;

// function updateObjectInArray(array, action) {
//     return array.map((item, index) => {
//       if (index !== action.index) {
//         // This isn't the item we care about - keep it as-is
//         return item
//       }
  
//       // Otherwise, this is the one we want - return an updated value
//       return {
//         ...item,
//         ...action.item
//       }
//     })
//   }