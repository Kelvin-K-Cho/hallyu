@tracks.each do |track|
  json.set! track.id do
    json.extract! track, :id, :title, :image_url, :song_url
  end
end
