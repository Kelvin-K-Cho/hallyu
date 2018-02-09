export const fetchDislikes = () => (
  $.ajax({
    method: 'GET',
    url: `api/dislikes`
  })
);

export const fetchDislike = (id) => (
  $.ajax({
    method: 'GET',
    url: `api/dislikes/${id}`
  })
);

export const createDislike = (dislike) => (
  $.ajax({
    method: 'POST',
    url: `api/dislikes`,
    data: { dislike }
  })
);

export const deleteDislike = (id) => {
  return $.ajax({
    method: 'DELETE',
    url: `api/dislikes/${id}`
  });
};
// 
// export const fetchSpecificDislike = (stationId, trackId) => (
//   $.ajax({
//     method: 'GET',
//     url: `api/dislikes`,
//     data: {
//       station_id: stationId,
//       track_id: trackId
//     }
//   })
// );
