import React from 'react';

class MediaBar extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchTracks();
  }

  render() {
    let audioplayer;
    if (this.props.track) {
      audioplayer = <audio id="audioplayer" controlsList="nodownload" controls src={this.props.track.song_url}/>;
    }
    if (audioplayer) {
      return (
        <div id="audio-bar">
          {audioplayer}
        </div>
      );
    } else {
      return (
        <div>
        </div>
      );
    }
  }
}

export default MediaBar;
