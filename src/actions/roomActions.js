import { CHANGE_ROOM } from '../constants/constants';

export const changeRoom = room => {
    console.log(room);
    return {
        type: CHANGE_ROOM,
        payload: { room }
    };
};