import { ROOM_OPS } from '../constants/constants';

export const roomOps = (ops) => {
    return {
        type: ROOM_OPS,
        payload: { ops }
    };
};