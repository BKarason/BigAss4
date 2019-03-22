import { CHANGE_ROOM } from '../constants/constants';

export default function(state = {}, action) {
    switch (action.type) {
        case CHANGE_ROOM: return action.payload;
        default: return state;
    }
};