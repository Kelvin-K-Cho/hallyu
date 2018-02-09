json.extract! station, :id, :station_name, :description
json.image_url asset_path(station.image.url)
json.likes @station.likes.pluck(:id)
json.dislikes @station.dislikes.pluck(:id)
json.track_likes @station.track_likes.pluck(:id)
json.track_dislikes @station.track_dislikes.pluck(:id)
