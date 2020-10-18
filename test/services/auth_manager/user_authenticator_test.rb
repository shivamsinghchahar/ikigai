require "test_helper"

class AuthManager::UserAuthenticatorTest < ActiveSupport::TestCase
  setup do
    @user = create :user
  end

  test "should authenticate user" do
    response = authenticate_user(user_params)

    assert response.success?
    assert_equal @user, response.user
  end

  test "should return error for invalid password" do
    response = authenticate_user(user_params.merge(password: "invalid"))

    assert_not response.success?
    assert_equal "Incorrect email or password", response.error
  end

  test "should return error for invalid email" do
    response = authenticate_user(user_params.merge(email: "email@invalid.com"))

    assert_not response.success?
    assert_equal "Incorrect email or password", response.error
  end

  private
    def user_params
      { email: @user.email,
        password: "password" }
    end

    def authenticate_user(params)
      AuthManager::UserAuthenticator.call(params)
    end
end
