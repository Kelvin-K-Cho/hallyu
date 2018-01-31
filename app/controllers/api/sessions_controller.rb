class Api::SessionsController < ApplicationController

  def create
    @user = User.find_by_credentials(
      params[:user][:email],
      params[:user][:password]
    )
    if @user
      login(@user)
      # render "api/stations/index"
      render json: @user
    else
      render json: ['Invalid username or password'], status: 401
    end
  end

  def destroy
    logout
    render json: { message: 'Logout successful.' }
  end

end
