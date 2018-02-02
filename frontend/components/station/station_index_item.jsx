import React from 'react';

class StationIndexItem extends React.Component {
  render () {
    const { station, stationId, currentUser, deleteStation } = this.props;
    return (
      <li>
        <img className="img-image" src={station.image_url}/>
        <div className="text-image">{station.station_name}</div>
        <button onClick={() => deleteStation(currentUser.id, stationId)}>Delete</button>
      </li>
    );
  }
}

export default StationIndexItem;
