json.extract! user, :id, :email
json.station_ids @user.stations.pluck(:id)
