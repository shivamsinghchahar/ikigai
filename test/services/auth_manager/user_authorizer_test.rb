require "test_helper"

class AuthManager::UserAuthorizerTest < ActiveSupport::TestCase
  setup do
    @user = create :user
    @auth_token = JsonWebToken.encode({ user_id: @user.id })
  end

  test "should decode token" do
    response = AuthManager::UserAuthorizer.call(headers(@user))

    assert_equal @user.id, response["user_id"]
  end

  test "should return nil if token is invalid" do
    headers = { "Authorization" => "Bearer #{@auth_token}invlaid" }
    response = AuthManager::UserAuthorizer.call(headers)

    assert_not response
  end
end
