import React from 'react';

class MediaBar extends React.Component {
  constructor(props) {
    super(props);

    this.playAudio = this.playAudio.bind(this);
    this.pauseAudio = this.pauseAudio.bind(this);
  }

  componentDidMount() {
    this.props.fetchTracks();
  }

  playAudio() {
    this.audio.play();
  }

  pauseAudio() {
    this.audio.pause();
  }

  render() {
    let trackUrl = '/';
    if (this.props.track) {
      trackUrl = this.props.track.song_url;
    }
    return (
      <div id="audioplayer">
        <audio
          ref={(audio) => { this.audio = audio; }}
          src={trackUrl}>
        </audio>
        <div onClick={this.playAudio}>
          <i class="fas fa-play"></i>
        </div>
        <div onClick={this.pauseAudio}>
          <i class="fas fa-pause"></i>
        </div>
      </div>
    );
  }
}

export default MediaBar;
