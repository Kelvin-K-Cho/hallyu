import { connect } from 'react-redux';
import { fetchStation, createStation, updateStation } from '../../actions/stations';
import StationForm from './station_form';

const mapStateToProps = (state, ownProps) => {
  let station;
  let formType;
  if (!ownProps.match.params.stationId) {
    station = {
      station_name: "",
      description: "",
      image_url: "" };
    formType = 'new';
  } else {
    station = state.entities.stations[ownProps.match.params.stationId];
    
  }
  return {
    station,
    formType
  }
};
