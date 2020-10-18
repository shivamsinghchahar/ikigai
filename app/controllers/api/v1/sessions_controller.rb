class Api::V1::SessionsController < ApplicationController
  skip_before_action :load_user_using_token, only: :create

  def create
    response = AuthManager::UserAuthenticator.call(session_params)

    if response.success?
      auth_token = JsonWebToken.encode({ user_id: response.user.id })
      render json: { auth_token: auth_token,
                    user: response.user.as_json(except: :password_digest),
                    is_admin: response.user.administrator? }
    else
      render json: { error: response.error }, status: :unprocessable_entity
    end
  end

  def show
    render json: { user: @current_user.as_json(except: :password_digest) }
  end

  private
    def session_params
      params.require(:user).permit(:email, :password)
    end
end
