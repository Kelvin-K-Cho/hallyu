import values from 'lodash/values';
import keys from 'lodash/keys';

export const selectStations = state => values(state.entities.stations);
