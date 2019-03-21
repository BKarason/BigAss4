import { ADD_USER } from '../constants';

export const addUser = (name) => {
    return {
        type: ADD_USER,
        payload: { name }
    };
};