@stations.each do |station|
  json.set! station.id do
    json.extract! station, :id, :description, :image_url
  end
end
