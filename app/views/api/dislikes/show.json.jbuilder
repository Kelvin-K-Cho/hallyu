json.set! @dislike.id do
  json.partial! "api/dislike/dislike", dislike: @dislike
end
