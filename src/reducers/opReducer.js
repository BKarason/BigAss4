import { ROOM_OPS } from '../constants/constants';

const initalState = {
    ops: {}
};

export default function(state = initalState, action) {
    switch (action.type) {
        case ROOM_OPS:
            return action.payload;
        default: return state;
    }
};