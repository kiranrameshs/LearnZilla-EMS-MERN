import * as ActionTypes from './action-types';

export const loginUser = (userData) => {
    return { type: ActionTypes.LOGIN_USER, payload: userData }
}
