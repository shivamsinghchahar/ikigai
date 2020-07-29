module AuthManager
  class UserAuthorizer < ApplicationService
    attr_reader :headers

    def initialize(headers = {})
      @headers = headers
    end

    def call
      verify_token
    end

    private

    def token
      return unless @headers['Authorization'].present?

      @headers['Authorization'].split(' ').last
    end

    def verify_token
      JsonWebToken.verify(token) if token
    end
  end
end
