class Api::StationsController < ApplicationController
  
  def index
    @stations = Station.all
  end
end
