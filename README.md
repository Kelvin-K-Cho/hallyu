# Hallyu Production Readme

Hallyu, also known as the "Korean Wave", is a single-page music web application inspired by Pandora. It allows users to create stations based off their favorite k-pop artists and personalize their stations through likes/dislikes.

Application Link: [Hallyu](http://hallyu.herokuapp.com/#/)

![HomePage](https://s3-us-west-1.amazonaws.com/hallyu-dev/images/Screen+Shot+2018-02-09+at+1.30.23+PM.png)

# Technology
  Hallyu was designed and built in two weeks using Ruby on Rails RESTful backend to handle the PostgreSQL database with a React/Redux frontend.

# Features
+ User authentication using secure session tokens via encryption provided by BCrypt.
+ Media Bar that allows users to play/pause audio, skip tracks and adjust volume.
+ Users can create and manage their favorite stations.
+ Each station keeps track of the likes/dislikes of every track leading to more personalization of the user experience.
+ Image Uploading provided by Paperclip and hosted on Amazon Web Services.

![FullApp](https://s3-us-west-1.amazonaws.com/hallyu-dev/images/Screen+Shot+2018-02-09+at+2.36.46+PM.png)

# Challenges
1. The media player was built utilizing React/Redux.  HTML5's native audio tag was only used to parse the audio (no outside library was used for this feature).  The "state" of the media player is tracked by the application.

![MediaButtons](https://s3-us-west-1.amazonaws.com/hallyu-dev/images/Screen+Shot+2018-02-09+at+2.22.41+PM.png)

```
<audio
  ref={(audio) => { this.audio = audio; }}
  src={trackUrl}
  onCanPlayThrough={this.getDuration}
  onTimeUpdate={this.getCurrentTime}
  onEnded={this.setEnd}
  >
</audio>
```

 + HTML5's audio tag captures the audio.  By adding a Ref to the DOM element, I was able to manipulate the actual audio using JavaScript.

```let initialState = {
  playing: true,
  repeat: false,
  mute: false,
  currentTrack: null,
  queue: [],
  song_name: null,
  song_image: null,
  song_url: null
};
```

 + An initial state is set by the reducer and passed through the app.  Through user interaction, the state is manipulated using the Redux cycle.  

```
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
```

 + A switch statement handles the different interactions.  A new state of the media player is generated each time to avoid directly mutating the old state.

2. The volume/duration bars are dynamically changing.  In order to allow the bars to show progress, CSS combined with native JavaScript allow for manipulation of how each element is rendered.

![VolumeBar](https://s3-us-west-1.amazonaws.com/hallyu-dev/images/Screen+Shot+2018-02-09+at+2.10.42+PM.png)

```
<div id="slider">
  <div style={sliderStyle} id="slider-currentTime"></div>
  <input id="slider-bar" type="range" min={0} max={1} step="any" value={this.setSlider()}></input>
</div>
```

 + The slider is an HTML element and the inline style allows the element to change when the current time updates over the duration.

```
#slider-currentTime {
  padding-right: 3px;
  height: 50%;
  background: #ff6600;
  z-index: 4;
  border-radius: 2px;
  position: absolute;
}
```

The tag above is placed over the slider element in order to imitate tracking the progress of the bar.

# Future Implementation
+ Search bar to add existing stations to user's stations.
+ Users can edit their profile.
