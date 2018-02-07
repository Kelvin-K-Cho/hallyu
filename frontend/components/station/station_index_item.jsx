import React from 'react';
import { Link } from 'react-router-dom';

class StationIndexItem extends React.Component {
  render () {
    const { station, stationId, currentUser, deleteStation, fetchTracks } = this.props;
    return (
      <li>
        <img className="img-image" src={station.image_url}/>
        <div className="text-image">{station.station_name}</div>
        <div className="links-item">
          <Link className="link-details" to={`/stations/${stationId}`}>Details</Link>
          <button
            onClick={() => fetchTracks()}
            >
            Play
          </button>
          <button
            id='button-dstation'
            onClick={() => deleteStation(currentUser.id, stationId)}
            >Delete</button>
        </div>
      </li>
    );
  }
}

export default StationIndexItem;
