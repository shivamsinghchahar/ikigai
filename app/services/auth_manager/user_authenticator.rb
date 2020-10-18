module AuthManager
  class UserAuthenticator < ApplicationService
    attr_reader :email, :password

    def initialize(session_params)
      @email = session_params[:email]
      @password = session_params[:password]
    end

    def call
      user = User.find_by_email(email)
      if user && user.authenticate(password)
        OpenStruct.new(success?: true, user: user)
      else
        OpenStruct.new(success?: false, error: "Incorrect email or password")
      end
    end
  end
end
