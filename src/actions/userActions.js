import { ADD_USER } from '../constants/constants';

export const addUser = (name) => {
    console.log(name);
    return {
        type: ADD_USER,
        payload: { name }
    };
};