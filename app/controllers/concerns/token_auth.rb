module TokenAuth
  extend ActiveSupport::Concern

  def load_user_using_token
    user = AuthManager::UserAuthorizer.call(request.headers)

    if user
      user_id = user['user_id'] if user
      @current_user = User.find_by(id: user_id)
    else
      render json: { error: 'You need to login' }, status: :unauthorized
    end
  end
end
