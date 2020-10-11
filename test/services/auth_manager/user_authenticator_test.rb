require "test_helper"

class AuthManager::UserAuthenticatorTest < ActiveSupport::TestCase
  setup do
    @user = create :user
  end

  test "should authenticate user" do
    response = AuthManager::UserAuthenticator.call(user_params)

    assert response.success?
    assert_equal @user, response.user
  end

  test "should return error for invalid password" do
    response = AuthManager::UserAuthenticator.call(user_params.merge(password: "invalid"))

    assert_not response.success?
    assert_equal ["Invalid credentials"], response.errors[:authentication]
  end

  test "should return error for invalid email" do
    response = AuthManager::UserAuthenticator.call(user_params.merge(email: "email@invalid.com"))

    assert_not response.success?
    assert_equal ["Invalid credentials"], response.errors[:authentication]
  end

  private
    def user_params
      { email: @user.email,
        password: "password" }
    end
end
