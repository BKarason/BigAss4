import { ROOM_USERS } from '../constants/constants';

const initalState = {
    users: {}
};

export default function(state = initalState, action) {
    switch (action.type) {
        case ROOM_USERS: 
            console.log(action.payload);
            return action.payload;
        default: return state;
    }
};