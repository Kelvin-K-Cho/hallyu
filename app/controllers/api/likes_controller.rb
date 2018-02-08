class Api::LikesController < ApplicationController
  def index
    @likes = Like.all
  end

  def show
    @like = Like.find(params[:id])
  end

  def create
    @like = Like.new(like_params)
    if @like.save
      render @like
    else
      render json: @like.errors.full_messages, status: 422
    end
  end

  def destroy
    @like = current_user.stations.track_likes.find(params[:id])
    if @like
      @like.destroy
    else
      render json: ['Cannot be found'], status: 410
    end
  end

  private

  def like_params
    params.require(:like).permit(:track_id, :station_id)
  end
end
