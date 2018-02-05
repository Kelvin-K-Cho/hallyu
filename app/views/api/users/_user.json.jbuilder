json.extract! user, :id, :email
json.station_ids @user.stations.pluck(:id)
json.image_url asset_path(user.image.url)
