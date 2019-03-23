import { CHANGE_ROOM } from '../constants/constants';

export const changeRoom = (room, rooms) => {
    console.log(room);
    return {
        type: CHANGE_ROOM,
        payload: { room, rooms }
    };
};