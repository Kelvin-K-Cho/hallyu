class Api::DislikesController < ApplicationController
  def index
    @dislikes = Dislike.all
  end

  def show
    @dislike = Dislike.find(params[:id])
  end

  def create
    @dislike = Dislike.new(dislike_params)
    if @dislike.save
      render @dislike
    else
      render json: @dislike.errors.full_messages, status: 422
    end
  end

  def destroy
    @dislike = Dislike.find(params[:id])
    if @dislike
      @dislike.destroy
      render @dislike
    else
      render json: ['Cannot be found'], status: 410
    end
  end

  private

  def dislike_params
    params.require(:dislike).permit(:track_id, :station_id)
  end
end
