require "test_helper"

class AuthManager::UserAuthenticatorTest < ActiveSupport::TestCase
  setup do
    @user = create :user
  end

  test "should authenticate user" do
    response = AuthManager::UserAuthenticator.call(@user.email, "password")

    assert response.success?
    assert_equal @user, response.user
  end

  test "should return error for invalid password" do
    response = AuthManager::UserAuthenticator.call(@user.email, "invalid")

    assert_not response.success?
    assert_equal ["Invalid credentials"], response.errors[:authentication]
  end

  test "should return error for invalid email" do
    response = AuthManager::UserAuthenticator.call("email@invalid.com", "password")

    assert_not response.success?
    assert_equal ["Invalid credentials"], response.errors[:authentication]
  end
end
