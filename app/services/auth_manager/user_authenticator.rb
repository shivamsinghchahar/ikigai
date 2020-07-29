module AuthManager
  class UserAuthenticator < ApplicationService
    attr_reader :email, :password

    def initialize(email, password)
      @email = email
      @password = password
    end

    def call
      user = User.find_by_email(@email)
      if user && user.authenticate(@password)
        OpenStruct.new(success?: true, user: user)
      else
        OpenStruct.new(success?: false, errors: { authentication: ['Invalid credentials'] })
      end
    end
  end
end
