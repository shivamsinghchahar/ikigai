require "test_helper"

class Api::V1::SessionsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @user = create :user
    @session_params = { user: { email: @user.email, password: "password" } }
    @auth_token = JsonWebToken.encode({ user_id: @user.id })
  end

  test "create should return token and user" do
    post api_v1_session_path, params: @session_params

    assert_response :success
    json = response.parsed_body
    assert_equal %w[auth_token is_admin user].sort, json.keys.sort
  end

  test "create should return error for invalid credentials" do
    @session_params[:user][:password] = "invalid"
    post api_v1_session_path, params: @session_params

    assert_response :unprocessable_entity
    assert_equal ["Invalid credentials"], response.parsed_body["errors"]["authentication"]
  end

  test "show should return the current user" do
    get api_v1_session_path, headers: headers(@user)

    assert_response :success
    assert_equal @user.id, response.parsed_body["user"]["id"]
  end

  test "show should return error for invalid token" do
    headers = headers(@user)
    headers["Authorization"] = " " * 6
    get api_v1_session_path, headers: headers

    assert_response :unauthorized
    assert_equal "You need to login", response.parsed_body["error"]
  end
end
