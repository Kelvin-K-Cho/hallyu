@dislikes.each do |dislike|
  json.set! dislike.id do
    json.extract! dislike, :id, :station_id, :track_id
  end
end
