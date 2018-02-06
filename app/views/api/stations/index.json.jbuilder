@stations.each do |station|
  json.set! station.id do
    json.extract! station, :id, :station_name, :description
    json.image_url asset_path(station.image.url)
  end
end
