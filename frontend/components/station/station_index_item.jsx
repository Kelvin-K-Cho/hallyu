import React from 'react';

class StationIndexItem extends React.Component {
  render () {
    const { station } = this.props;
    return (
      <li>
        <img className="img-image" src={station.image_url}/>
        <div className="text-image">{station.station_name}</div>
      </li>
    );
  }
}

export default StationIndexItem;
