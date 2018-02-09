import { RECEIVE_ALL_TRACKS } from '../actions/tracks';
import { TOGGLE_PLAY, TOGGLE_REPEAT, TOGGLE_MUTE, NEXT_TRACK } from '../actions/audio';
import merge from 'lodash/merge';
import shuffle from 'lodash/shuffle';

let initialState = {
  playing: true,
  repeat: false,
  mute: false,
  currentTrack: null,
  queue: [],
  song_name: null,
  song_image: null,
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
      newState['queue'] = shuffle(Object.values(action.tracks));
      newState['currentTrack'] = newState['queue'][0].id;
      newState['song_url'] = newState['queue'][0].song_url;
      newState['song_name'] = newState['queue'][0].title;
      newState['song_image'] = newState['queue'][0].image_url;
      return newState;

    case TOGGLE_PLAY:
     newState = merge({}, state);
     newState['playing'] = !state.playing;
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
      let newQueue = shuffle(state.queue);
      // let oldTrack = newQueue.shift();
      // newQueue.push(oldTrack);
      newState['queue'] = newQueue;
      newState['currentTrack'] = newQueue[0].id;
      newState['song_url'] = newQueue[0].song_url;
      newState['song_name'] = newQueue[0].title;
      newState['song_image'] = newQueue[0].image_url;
      return newState;

    default:
      return state;
  }
};
