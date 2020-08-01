class Api::V1::SessionsController < ApplicationController
  skip_before_action :load_user_using_token, only: :create

  def create
    response = AuthManager::UserAuthenticator.call(session_params[:email], session_params[:password])

    if response.success?
      auth_token = JsonWebToken.encode({ user_id: response.user.id })
      render json: { auth_token: auth_token, user: response.user }
    else
      render json: { errors: response.errors }, status: :unprocessable_entity
    end
  end

  def show
    render json: @current_user
  end

  private
    def session_params
      params.require(:user).permit(:email, :password)
    end
end
