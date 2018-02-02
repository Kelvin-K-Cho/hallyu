json.set! @station.id do
  json.partial! "api/stations/station", station: @station
end
