import { ADD_USER } from '../constants/constants';

export default function(state = {}, action) {
    switch (action.type) {
        case ADD_USER: return action.payload;
        default: return state;
    }
};