json.extract! station, :id, :station_name, :description
json.image_url asset_path(station.image.url)
json.track_likes @station.track_likes.pluck(:id)
json.track_dislikes @station.track_dislikes.pluck(:id)
