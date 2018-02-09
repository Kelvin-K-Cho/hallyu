import React from 'react';

class MediaBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      volume: .5,
      muted: false,
      duration: 0,
      currentTime: 0,
    };
    this.playAudio = this.playAudio.bind(this);
    this.pauseAudio = this.pauseAudio.bind(this);
    this.muteAudio = this.muteAudio.bind(this);
    this.repeatAudio = this.repeatAudio.bind(this);
    this.parseTime = this.parseTime.bind(this);
    this.setSlider = this.setSlider.bind(this);
    this.setEnd = this.setEnd.bind(this);
    this.getCurrentTime = this.getCurrentTime.bind(this);
    this.getDuration = this.getDuration.bind(this);
    this.setVolume = this.setVolume.bind(this);
    this.like = this.like.bind(this);
    this.dislike = this.dislike.bind(this);
    this.unLike = this.unLike.bind(this);
    this.unDislike = this.unDislike.bind(this);
  }

  componentDidMount() {
    this.setState({
      currentTime: this.audio.currentTime,
      duration: this.audio.duration
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.audio.currentTrack !== this.props.audio.currentTrack) {
      if (this.props.audio.playing) {
        this.audio.play();
      }
    }
  }

  componentWillUpdate(nextProps, nextState){
    if (nextState.duration > 0) {
      if (nextState.currentTime === nextState.duration) {
        this.setState({
          currentTime: 0
        });
      nextProps.nextTrack();
      }
    }
  }

  setSlider() {
    return (this.state.currentTime / this.state.duration);
  }

  setEnd () {
    debugger;
    if (this.props.audio.repeat) {
      this.audio.currentTime = 0;
      this.audio.play();
    } else {
      this.props.nextTrack();
    }
  }

  parseTime(value) {
    let time;
    if (value) {
      time = Math.floor(value);
      if (time >= 60) {
        let minutes = Math.floor(time/60);
        let seconds = time % 60;
        if (seconds >= 10) {
          time = `0${minutes}:${seconds}`;
        } else {
          time = `0${minutes}:0${seconds}`;
        }
      } else {
        if (time >= 10) {
          time = `00:${time}`;
        } else {
          time = `00:0${time}`;
        }
      }
      return time;
    } else {
      return "00:00";
    }
  }

  playAudio() {
    this.audio.play();
    this.props.togglePlay();
  }

  pauseAudio() {
    this.audio.pause();
    this.props.togglePlay();
  }

  muteAudio() {
    this.audio.muted = !this.audio.muted;
    this.props.toggleMute();
  }

  repeatAudio() {
    this.props.toggleRepeat();
  }

  getCurrentTime () {
    this.setState({
      currentTime: this.audio.currentTime
    });
  }

  getDuration () {
    this.setState({
      duration: this.audio.duration
    });
  }

  setVolume(event){
    if (this.props.audio.currentTrack) {
      let volume = event.target.value;
      this.audio.volume = volume;
      this.setState({
        volume
      });
    } else {
      return;
    }
  }

  like() {
    let likeItem = {
      'station_id': this.props.ui.stationId,
      'track_id': this.props.audio.currentTrack
    };
    this.props.createLike(likeItem);
    this.props.deleteDislike(this.props.audio.currentTrack);
  }

  dislike() {
    let dislikeItem = {
      'station_id': this.props.ui.stationId,
      'track_id': this.props.audio.currentTrack
    };
    this.props.createDislike(dislikeItem);
    this.props.deleteLike(this.props.audio.currentTrack);
  }

  unLike() {
    this.props.deleteLike(this.props.audio.currentTrack);
  }

  unDislike() {
    this.props.deleteDislike(this.props.audio.currentTrack);
  }

  render() {
    let trackUrl = '/';

    if (this.props.audio.currentTrack) {
      trackUrl = this.props.audio.song_url;
    }

    let playButton;
    let pauseButton;

    if (this.props.audio.playing) {
      pauseButton =
        <div id="button-pause" onClick={this.pauseAudio}>
          <i className="fas fa-pause"></i>
        </div>;
      playButton = null;
    } else {
      playButton =
      <div id="button-play" onClick={this.playAudio}>
        <i className="fas fa-play"></i>
      </div>;
      pauseButton = null;
    }

    let muteOn;
    let muteOff;

    if (this.props.audio.mute) {
      muteOff =
      <div id="button-mute-off" onClick={this.muteAudio}>
        <i className="fas fa-volume-off mute"></i>
      </div>;
      muteOn = null;
    } else {
      muteOn =
      <div id="button-mute-on" onClick={this.muteAudio}>
        <i className="fas fa-volume-up volume"></i>
      </div>;
      muteOff = null;
    }

    let toggleOn;
    let toggleOff;

    if (this.props.audio.repeat) {
      toggleOff =
      <span id="button-repeat-off" onClick={this.repeatAudio}>
        <i className="fas fa-redo-alt fa-2x repeat"></i>
      </span>;
      toggleOn = null;
    } else {
      toggleOn =
      <span id="button-repeat-on" onClick={this.repeatAudio}>
        <i className="fas fa-redo-alt fa-2x repeat"></i>
      </span>;
      toggleOff = null;
    }

    let like;

    if (this.props.ui.likes) {
      like = (this.props.ui.likes.indexOf(this.props.audio.currentTrack) !== -1) ? true : false;
    }

    let likeOn;
    let likeOff;

    if (like) {
      likeOn =
      <span id="button-like-on" onClick={this.unLike}>
        <i class="fas fa-thumbs-up"></i>
      </span>;
      likeOff = null;
    } else {
      likeOff =
      <span id="button-like-off" onClick={this.like}>
        <i class="fas fa-thumbs-up"></i>
      </span>;
      likeOn = null;
    }

    let dislike;

    if (this.props.ui.dislikes) {
      dislike = (this.props.ui.dislikes.indexOf(this.props.audio.currentTrack) !== -1 ? true : false);
    }

    let dislikeOn;
    let dislikeOff;

    if (dislike) {
      dislikeOn =
      <span id="button-dislike-on" onClick={this.unDislike}>
        <i class="fas fa-thumbs-down"></i>
      </span>;
      dislikeOff = null;
    } else {
      dislikeOff =
      <span id="button-dislike-off" onClick={this.dislike}>
        <i class="fas fa-thumbs-down"></i>
      </span>;
      dislikeOn = null;
    }

    let trackImage;

    if (this.props.audio.song_image) {
      trackImage =
      <img
        id='preview-track-image'
        src={this.props.audio.song_image}
      />;
    } else {
      trackImage = <img/>;
    }

    let sliderStyle = {
      width: `${this.setSlider() * 100}%`
    };

    let volumeStyle = {
      width: `${this.state.volume * 10}%`
    };

    return (
      <div id="audioplayer">
        <audio
          ref={(audio) => { this.audio = audio; }}
          src={trackUrl}
          onCanPlayThrough={this.getDuration}
          onTimeUpdate={this.getCurrentTime}
          onEnded={this.setEnd}
          >
        </audio>
        {trackImage}
        <span id='media-title'>
          {this.props.audio.song_name}
        </span>
        <div id="slider">
          <div style={sliderStyle} id="slider-currentTime"></div>
          <input id="slider-bar" type="range" min={0} max={1} step="any" value={this.setSlider()}></input>
        </div>
        <div id="media-buttons">
          {dislikeOn}
          {dislikeOff}
          {toggleOn}
          {toggleOff}
          {playButton}
          {pauseButton}
          <span id="button-next" onClick={this.props.nextTrack}>
            <i className="fas fa-fast-forward fa-2x next-button"></i>
          </span>
          {likeOn}
          {likeOff}
          <div id="mute-button">
            {muteOn}
            {muteOff}
          </div>
        </div>
        <div id="volume">
          <div style={volumeStyle} id="currentVolume"></div>
          <input id="volume-bar" onChange={this.setVolume} type="range" min={0} max={1} step="any" value={this.state.volume}></input>
        </div>
        <span id="text-timer">
          {this.parseTime(this.state.currentTime)}&nbsp;&nbsp;|&nbsp;&nbsp;{this.parseTime(this.state.duration)}
        </span>
      </div>
    );
  }
}

export default MediaBar;
