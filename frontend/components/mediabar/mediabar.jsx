import React from 'react';

class MediaBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      volume: 1,
      muted: false,
      duration: 0,
      currentTime: 0,
      played: 0
    };
    this.playAudio = this.playAudio.bind(this);
    this.pauseAudio = this.pauseAudio.bind(this);
    this.muteAudio = this.muteAudio.bind(this);
    this.repeatAudio = this.repeatAudio.bind(this);
    this.parseTime = this.parseTime.bind(this);
    this.setDuration = this.setDuration.bind(this);
    this.setCurrentTime = this.setCurrentTime.bind(this);
    this.setSlider = this.setSlider.bind(this);
    this.setEnd = this.setEnd.bind(this);
    this.getCurrentTime = this.getCurrentTime.bind(this);
    this.getDuration = this.getDuration.bind(this);
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

  setDuration () {
    let duration = this.parseTime(this.audio.duration);
    this.setState({
      duration: duration
    });
  }

  setCurrentTime() {
    let currentTime = this.parseTime(this.audio.currentTime);
    this.setState({
      currentTime: currentTime
    });
  }

  setSlider() {
    return (this.state.currentTime / this.state.duration);
  }

  setEnd () {
    if (this.props.audio.repeat) {
      this.audio.currentTime = 0;
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

  render() {
    let trackUrl = '/';

    if (this.props.audio.currentTrack) {
      trackUrl = this.props.audio.song_url;
    }

    let playButton;
    let pauseButton;

    if (this.props.audio.playing) {
      pauseButton =
        <div onClick={this.pauseAudio}>
          <i className="fas fa-pause"></i>
        </div>;
      playButton = null;
    } else {
      playButton =
      <div onClick={this.playAudio}>
        <i className="fas fa-play"></i>
      </div>;
      pauseButton = null;
    }

    let muteOn;
    let muteOff;

    if (this.props.audio.mute) {
      muteOff =
      <div onClick={this.muteAudio}>
        <i className="fas fa-volume-off mute"></i>
      </div>;
      muteOn = null;
    } else {
      muteOn =
      <div onClick={this.muteAudio}>
        <i className="fas fa-volume-up volume"></i>
      </div>;
      muteOff = null;
    }

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
        <div>
          <input type="range" min={0} max={1} step="any" value={this.setSlider()}></input>
        </div>
        <div onClick={this.repeatAudio}>
          <i className="fas fa-redo-alt fa-2x repeat"></i>
        </div>
        {playButton}
        {pauseButton}
        <div onClick={this.props.nextTrack}>
          <i className="fas fa-fast-forward fa-2x next-button"></i>
        </div>
        {muteOn}
        {muteOff}
        <div>
          <span>{this.parseTime(this.state.currentTime)} | </span>
          <span>{this.parseTime(this.state.duration)}</span>
        </div>
      </div>
    );
  }
}

export default MediaBar;
