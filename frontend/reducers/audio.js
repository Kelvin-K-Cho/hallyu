import { RECEIVE_ALL_TRACKS } from '../actions/tracks';
import { TOGGLE_PLAY, TOGGLE_REPEAT, TOGGLE_MUTE, NEXT_TRACK } from '../actions/audio';
import merge from 'lodash/merge';

let initialState = {
  playing: true,
  repeat: false,
  mute: false,
  currentTrack: null,
  queue: [],
  song_url: null
};

export default (state = initialState, action) => {
  Object.freeze(state);
  let newState;
  let tracksList;
  switch(action.type) {

    case RECEIVE_ALL_TRACKS:
      tracksList = Object.keys(action.tracks);
      newState = merge({}, state);
      newState['queue'] = Object.values(action.tracks);
      newState['currentTrack'] = tracksList[0];
      newState['song_url'] = newState['queue'][0].song_url;
      return newState;

    case TOGGLE_PLAY:
     newState = merge({}, state);
     console.log(newState);
     newState['playing'] = !state.playing;
     console.log(newState);
     return newState;

    case TOGGLE_REPEAT:
      newState = merge({}, state);
      newState['repeat'] = !state.repeat;
      return newState;

    case TOGGLE_MUTE:
      newState = merge({}, state);
      newState['mute'] = !state.mute;
      return newState;

    case NEXT_TRACK:
      newState = merge({}, state);
      let newQueue = state.queue;
      let oldTrack = newQueue.shift();
      newQueue.push(oldTrack);
      newState['queue'] = newQueue;
      newState['currentTrack'] = newQueue[0].id;
      newState['song_url'] = newQueue[0].song_url;
      return newState;

    default:
      return state;
  }
};
