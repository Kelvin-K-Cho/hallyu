import * as SessionAPIUtil from '../utils/session';
import { receiveErrors, clearErrors } from './errors';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";

const receiveCurrentUser = (user) => ({
  type: RECEIVE_CURRENT_USER,
  user
});

const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER
});

export const createNewUser = formUser => dispatch => (
  SessionAPIUtil.postUser(formUser).then(
    user => { dispatch(receiveCurrentUser(user)); dispatch(clearErrors());},
    err => dispatch(receiveErrors(err.responseJSON)))
);

export const login = formUser => dispatch => (
  SessionAPIUtil.postSession(formUser).then(
    user => { dispatch(receiveCurrentUser(user)); dispatch(clearErrors());},
    err => dispatch(receiveErrors(err.responseJSON)))
);

export const logout = () => dispatch => (
  SessionAPIUtil.deleteSession().then(() => dispatch(logoutCurrentUser()))
);
