@stations.each do |station|
  json.set! station.id do
    json.extract! station, :id, :station_name, :description, :image_url
  end
end
