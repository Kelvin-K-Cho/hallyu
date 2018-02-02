import React from 'react';
import { Link } from 'react-router-dom';
import LoadingIcon from './loading_icon';

class StationShow extends React.Component {

  componentDidMount() {
    this.props.fetchStation(this.props.currentUser.id, this.props.match.params.stationId);
  }

  componentWillReceiveProps(nextProps) {
    if (!this.props.match.params.stationId) {
      this.props.fetchStation(this.props.currentUser.id, nextProps.match.params.stationId);
    }
  }

  render(){
    const station = this.props.station;
    if (!station) {
      return (
        <section>
          <LoadingIcon />
        </section>
      );
    }
    return (
      <div id="container-station">
        <img id="img-station" src={station.image_url}/>
        <h1 id="name-station">{station.station_name}</h1>
        <Link className="link-edit" to={`/stations/${station.id}/`}>Edit</Link>
        <p id="body-station">{station.description}</p>
      </div>
    );
  }
}

export default StationShow;
