import * as LikeAPIUtil from '../utils/likes';
import { receiveErrors, clearErrors } from './errors';

export const RECEIVE_ALL_LIKES = "RECEIVE_ALL_LIKES";
export const RECEIVE_LIKE = "RECEIVE_LIKE";
export const REMOVE_LIKE = "REMOVE_LIKE";

const receiveAllLikes = likes => ({
  type: RECEIVE_ALL_LIKES,
  likes
});

const receiveLike = like => ({
  type: RECEIVE_LIKE,
  like
});

const removeLike = likeId => ({
  type: REMOVE_LIKE,
  likeId
});

export const fetchLikes = () => dispatch => (
  LikeAPIUtil.fetchLikes().then(
    likes => { dispatch(receiveAllLikes(likes)); dispatch(clearErrors());},
    err => dispatch(receiveErrors(err.responseJSON)))
);

export const fetchLike = (id) => dispatch => (
  LikeAPIUtil.fetchLike(id).then(
    like => { dispatch(receiveLike(like)); dispatch(clearErrors());},
    err => dispatch(receiveErrors(err.responseJSON)))
);

export const createLike = (like) => dispatch => (
  LikeAPIUtil.createLike(like).then(
    serverLike => { dispatch(receiveLike(serverLike)); dispatch(clearErrors());},
    err => dispatch(receiveErrors(err.responseJSON)))
);

export const deleteLike = (id) => dispatch => (
  LikeAPIUtil.deleteLike(id).then(
    () => { dispatch(removeLike(id)); dispatch(clearErrors());},
    err => dispatch(receiveErrors(err.responseJSON)))
);
