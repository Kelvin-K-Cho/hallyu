import React from 'react';
import { Link } from 'react-router-dom';
import LoadingIcon from './loading_icon';

class StationShow extends React.Component {

  componentDidMount() {
    this.props.fetchStation(this.props.currentUser.id, this.props.match.params.stationId);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.stationId !== nextProps.match.params.stationId) {
      this.props.fetchStation(this.props.currentUser.id, nextProps.match.params.stationId);
    }
  }

  render(){
    const {station, currentUser, deleteStation} = this.props;
    if (!station) {
      return (
        <section>
          <LoadingIcon />
        </section>
      );
    }
    return (
      <div id="container-station">
        <h1 id="name-station">
          {station.station_name} &nbsp;
          <Link className="link-edit" to={`/stations/${station.id}/edit`}>
            <i class="fas fa-edit"></i>
          </Link>
        </h1>
        <div id="body-station">
          <img id="img-station" src={station.image_url}/>
          <div id="description-station">
            <div>Station Description:
              <Link to={"/stations"}>
                <button id="delete-station"
                  onClick={() => deleteStation(currentUser.id, station.id)}>Delete
                </button>
              </Link>
            </div>
            <br/>
            <br/>
            {station.description}
            <br/>
          </div>
        </div>
      </div>
    );
  }
}

export default StationShow;
