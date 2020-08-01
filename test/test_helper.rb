ENV["RAILS_ENV"] ||= "test"
require_relative "../config/environment"
require "rails/test_help"

class ActiveSupport::TestCase
  # Run tests in parallel with specified workers
  parallelize(workers: :number_of_processors)

  include FactoryBot::Syntax::Methods

  # Add more helper methods to be used by all tests here...
  def headers(user)
    auth_token = JsonWebToken.encode({ user_id: user.id })
    { "Authorization" => "Bearer #{auth_token}" }
  end
end
