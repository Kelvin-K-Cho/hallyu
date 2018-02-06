class Api::StationsController < ApplicationController

  # before_action :require_login

  def index
    @stations = Station.all
  end

  def show
    @station = Station.find(params[:id])
  end

  def create
    @station = Station.new(station_params)
    @station.user_id = current_user.id
    if @station.save
      render @station
    else
      render json: @station.errors.full_messages, status: 422
    end
  end

  def update
    @station = current_user.stations.find(params[:id])
    if @station && @station.update(station_params)
      render @station
    else
      render json: ['Invalid parameters'], status: 401
    end
  end

  def destroy
    @station = current_user.stations.find(params[:id])
    if @station
      @station.destroy
    else
      render json: ['Cannot be found'], status: 410
    end
  end

  private

  def station_params
    params.require(:station).permit(:station_name, :description, :image_url, :image)
  end

end
