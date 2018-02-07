export const TOGGLE_PLAY = "TOGGLE_PLAY";
export const TOGGLE_REPEAT = "TOGGLE_REPEAT";
export const TOGGLE_MUTE = "TOGGLE_MUTE";
export const NEXT_TRACK = "NEXT_TRACK";

export const togglePlay = () => ({
  type: TOGGLE_PLAY
});

export const toggleRepeat = () => ({
  type: TOGGLE_REPEAT
});

export const toggleMute = () => ({
  type: TOGGLE_MUTE
});

export const nextTrack = () => ({
  type: NEXT_TRACK
});
