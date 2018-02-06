class Api::TracksController < ApplicationController
  def index
    @tracks = Track.all
  end
end
