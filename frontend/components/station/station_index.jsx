import React from 'react';
import StationIndexItem from './station_index_item';
import { Link } from 'react-router-dom';
import AddingIcon from './adding_icon';

class StationIndex extends React.Component {

  componentDidMount() {
    this.props.fetchStations(this.props.currentUser.id);
  }

  render() {
    return (
      <section>
        <ul className="container-image">
          {
            this.props.stations.map(station => (
              <StationIndexItem
               key={station.id}
               station={station}
               deleteStation={this.props.deleteStation}
               currentUser={this.props.currentUser}
               stationId={station.id}
               fetchTracks={this.props.fetchTracks}
               setStation={this.props.setStation}
               />
            ))
          }
          <Link to={`/stations/new`}>
            <li>
              <AddingIcon/>
            </li>
          </Link>
        </ul>
      </section>
    );
  }
}

export default StationIndex;
