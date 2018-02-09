import * as DislikeAPIUtil from '../utils/dislikes';
import { receiveErrors, clearErrors } from './errors';

export const RECEIVE_ALL_DISLIKES = "RECEIVE_ALL_DISLIKES";
export const RECEIVE_DISLIKE = "RECEIVE_DISLIKE";
export const MAKE_DISLIKE = "MAKE_DISLIKE";
export const REMOVE_DISLIKE = "REMOVE_DISLIKE";

const receiveAllDislikes = dislikes => ({
  type: RECEIVE_ALL_DISLIKES,
  dislikes
});

const receiveDislike = dislike => ({
  type: RECEIVE_DISLIKE,
  dislike
});

const makeDislike = dislike => ({
  type: MAKE_DISLIKE,
  dislike
});

const removeDislike = dislike => ({
  type: REMOVE_DISLIKE,
  dislike
});

export const fetchDislikes = () => dispatch => (
  DislikeAPIUtil.fetchDislikes().then(
    dislikes => { dispatch(receiveAllDislikes(dislikes)); dispatch(clearErrors());},
    err => dispatch(receiveErrors(err.responseJSON)))
);

export const fetchDislike = (id) => dispatch => (
  DislikeAPIUtil.fetchDislike(id).then(
    dislike => { dispatch(receiveDislike(dislike)); dispatch(clearErrors());},
    err => dispatch(receiveErrors(err.responseJSON)))
);

export const createDislike = (dislike) => dispatch => (
  DislikeAPIUtil.createDislike(dislike).then(
    serverDislike => { dispatch(makeDislike(serverDislike)); dispatch(clearErrors());},
    err => dispatch(receiveErrors(err.responseJSON)))
);

export const deleteDislike = (id) => dispatch => (
  DislikeAPIUtil.deleteDislike(id).then(
    (dislike) => { dispatch(removeDislike(dislike)); dispatch(clearErrors());},
    err => dispatch(receiveErrors(err.responseJSON)))
);
