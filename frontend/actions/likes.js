import * as LikeAPIUtil from '../utils/likes';
import { receiveErrors, clearErrors } from './errors';

export const RECEIVE_ALL_LIKES = "RECEIVE_ALL_LIKES";
export const RECEIVE_LIKE = "RECEIVE_LIKE";
export const MAKE_LIKE = "MAKE_LIKE";
export const REMOVE_LIKE = "REMOVE_LIKE";

const receiveAllLikes = likes => ({
  type: RECEIVE_ALL_LIKES,
  likes
});

const receiveLike = like => ({
  type: RECEIVE_LIKE,
  like
});

const makeLike = like => ({
  type: MAKE_LIKE,
  like
});

const removeLike = like => ({
  type: REMOVE_LIKE,
  like
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
    serverLike => { dispatch(makeLike(serverLike)); dispatch(clearErrors());},
    err => dispatch(receiveErrors(err.responseJSON)))
);

export const deleteLike = (id) => dispatch => (
  LikeAPIUtil.deleteLike(id).then(
    (like) => { dispatch(removeLike(like)); dispatch(clearErrors());},
    err => dispatch(receiveErrors(err.responseJSON)))
);

// export const deleteLike = (stationId, trackId) => dispatch => (
//   LikeAPIUtil.fetchSpecificLike(stationId, trackId).then(
//     (like) => dispatch(LikeAPIUtil.deleteLike(like.id)).then(
//       (serverLike) => { dispatch(removeLike(like)); dispatch(clearErrors());}),
//       err => dispatch(receiveErrors(err.responseJSON)))
//     )
// ;
