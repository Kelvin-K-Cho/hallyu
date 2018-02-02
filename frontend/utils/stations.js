export const fetchStations = (userId) => (
  $.ajax({
    method: 'GET',
    url: `api/users/${userId}/stations`
  })
);

export const fetchStation = (userId, id) => (
  $.ajax({
    method: 'GET',
    url: `api/users/${userId}/stations/${id}`
  })
);

export const createStation = (userId, station) => (
  $.ajax({
    method: 'POST',
    url: `api/users/${userId}/stations`,
    data: { station }
  })
);

export const updateStation = (userId, station) => (
  $.ajax({
    method: 'PATCH',
    url: `api/users/${userId}/stations/${station.id}`,
    data: { station }
  })
);

export const deleteStation = (userId, id) => (
  $.ajax({
    method: 'DELETE',
    url: `api/users/${userId}/stations/${id}`
  })
);
