import { CHANGE_ROOM } from '../constants/constants';


const initalState = {
    roomName: ''
};

export default function(state = initalState, action) {
    switch (action.type) {
        case CHANGE_ROOM: 
            console.log(action.payload);
            return action.payload;
        default: return state;
    }
};