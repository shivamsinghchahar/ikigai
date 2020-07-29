class ApplicationController < ActionController::API
  include TokenAuth

  before_action :load_user_using_token
end
