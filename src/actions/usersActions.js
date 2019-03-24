import { ROOM_USERS } from '../constants/constants';


export const roomUsers = (users) => {
    console.log(users);
    return {
        type: ROOM_USERS,
        payload: { users }
    };
};