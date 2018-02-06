import * as TrackAPIUtil from '../utils/tracks';
import { receiveErrors, clearErrors } from './errors';

export const RECEIVE_ALL_TRACKS = "RECEIVE_ALL_TRACKS";
export const RECEIVE_TRACK = "RECEIVE_TRACK";

const receiveAllTracks = tracks => ({
  type: RECEIVE_ALL_TRACKS,
  tracks
});

const receiveTrack = track => ({
  type: RECEIVE_TRACK,
  track
});

export const fetchTracks = () => dispatch => (
  TrackAPIUtil.fetchTracks().then(
    tracks => { dispatch(receiveAllTracks(tracks)); dispatch(clearErrors());},
    err => dispatch(receiveErrors(err.responseJSON)))
);

export const fetchTrack = (id) => dispatch => (
  TrackAPIUtil.fetchTrack(id).then(
    track => { dispatch(receiveTrack(track[id])); dispatch(clearErrors());},
    err => dispatch(receiveErrors(err.responseJSON)))
);
