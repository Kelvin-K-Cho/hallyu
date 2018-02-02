import values from 'lodash/values';

export const selectStations = state => values(state.entities.stations);
