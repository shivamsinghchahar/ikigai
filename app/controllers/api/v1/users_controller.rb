class Api::V1::UsersController < ApplicationController
  skip_before_action :load_user_using_token

  def create
    user = User.new(user_params)

    if user.save
      auth_token = JsonWebToken.encode({ user_id: user.id })
      render json: { auth_token: auth_token, user: user.as_json(except: :password_digest) }, status: :created
    else
      render json: { errors: user.errors }, status: :unprocessable_entity
    end
  end

  private
    def user_params
      params.require(:user).permit(:first_name, :last_name, :email, :password, :password_confirmation)
    end
end
