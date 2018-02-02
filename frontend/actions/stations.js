import * as StationAPIUtil from '../utils/stations';
import { receiveErrors, clearErrors } from './errors';

export const RECEIVE_ALL_STATIONS = "RECEIVE_ALL_STATIONS";
export const RECEIVE_STATION = "RECEIVE_STATION";
export const REMOVE_STATION = "REMOVE_STATION";

const receiveAllStations = stations => ({
  type: RECEIVE_ALL_STATIONS,
  stations
});

const receiveStation = station => ({
  type: RECEIVE_STATION,
  station
});

const removeStation = stationId => ({
  type: REMOVE_STATION,
  stationId
});

export const fetchStations = (userId) => dispatch => (
  StationAPIUtil.fetchStations(userId).then(
    stations => { dispatch(receiveAllStations(stations)); dispatch(clearErrors());},
    err => dispatch(receiveErrors(err.responseJSON)))
);

export const fetchStation = (userId, id) => dispatch => (
  StationAPIUtil.fetchStation(userId, id).then(
    station => { dispatch(receiveStation(station)); dispatch(clearErrors());},
    err => dispatch(receiveErrors(err.responseJSON)))
);

export const createStation = (userId, id) => dispatch => (
  StationAPIUtil.createStation(userId, id).then(
    station => { dispatch(receiveStation(station)); dispatch(clearErrors());},
    err => dispatch(receiveErrors(err.responseJSON)))
);

export const updateStation = (userId, id) => dispatch => (
  StationAPIUtil.updateStation(userId, id).then(
    station => { dispatch(receiveStation(station)); dispatch(clearErrors());},
    err => dispatch(receiveErrors(err.responseJSON)))
);

export const deleteStation = (userId, stationId) => dispatch => (
  StationAPIUtil.deleteStation(userId, stationId).then(
    station => { dispatch(removeStation(stationId)); dispatch(clearErrors());},
    err => dispatch(receiveErrors(err.responseJSON)))
);
