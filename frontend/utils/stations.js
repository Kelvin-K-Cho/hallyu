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

export const createStation = (userId, formData) => (
  $.ajax({
    method: 'POST',
    url: `api/users/${userId}/stations`,
    data: formData,
    dataType: 'json',
    processData: false,
    contentType: false
  })
);

export const updateStation = (userId, formData) => {
  let id;
  for (let key of formData.keys()) {
    if (key === "station[id]") {
      id = formData.get(key);
    }
  }
  return $.ajax({
    method: 'PATCH',
    url: `api/users/${userId}/stations/${id}`,
    data: formData,
    dataType: 'json',
    processData: false,
    contentType: false
  });
};

export const deleteStation = (userId, id) => (
  $.ajax({
    method: 'DELETE',
    url: `api/users/${userId}/stations/${id}`
  })
);
