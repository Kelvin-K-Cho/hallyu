import React from 'react';
import StationIndexItem from './station_index_item';

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
               station={station} />
            ))
          }
        </ul>
      </section>
    );
  }
}

export default StationIndex;
