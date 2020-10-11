require "test_helper"

class Api::V1::UsersControllerTest < ActionDispatch::IntegrationTest
  setup do
    @user = create :user
  end

  test "should create user" do
    post api_v1_users_path, params: { user: valid_user_params }

    assert_response :created
    assert_equal %w[auth_token user], response.parsed_body.keys
  end

  test "should not create user with invalid email" do
    invalid_user_params = valid_user_params.merge({ email: "invalid" })
    post api_v1_users_path, params: { user: invalid_user_params }

    assert_response :unprocessable_entity
    assert_equal ["is invalid"], response.parsed_body["errors"]["email"]
  end

  test "should not create user with invalid password" do
    invalid_user_params = valid_user_params.merge({ password: "" })
    post api_v1_users_path, params: { user: invalid_user_params }

    assert_response :unprocessable_entity
    assert_equal ["can't be blank"], response.parsed_body["errors"]["password"]
  end

  test "should not create user with invalid name" do
    invalid_user_params = valid_user_params.merge({ first_name: "", last_name: "" })
    post api_v1_users_path, params: { user: invalid_user_params }

    assert_response :unprocessable_entity
    assert_equal ["can't be blank"], response.parsed_body["errors"]["first_name"]
    assert_equal ["can't be blank"], response.parsed_body["errors"]["last_name"]
  end

  test "should not create user without matching password confirmation" do
    invalid_user_params = valid_user_params.merge({ password_confirmation: "" })
    post api_v1_users_path, params: { user: invalid_user_params }

    assert_response :unprocessable_entity
    assert_equal ["doesn't match Password"], response.parsed_body["errors"]["password_confirmation"]
  end

  private
    def valid_user_params
      { first_name: "Jane",
        last_name: "Smith",
        email: "jane@example.com",
        password: "password",
        password_confirmation: "password" }
    end
end
