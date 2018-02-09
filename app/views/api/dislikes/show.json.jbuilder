json.set! @dislike.id do
  json.partial! "api/dislikes/dislike", dislike: @dislike
end
