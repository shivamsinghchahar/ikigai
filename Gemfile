source 'https://rubygems.org'
git_source(:github) { |repo| "https://github.com/#{repo}.git" }

ruby '2.7.1'

# Bundle edge Rails instead: gem 'rails', github: 'rails/rails'
gem 'rails', '~> 6.0.3', '>= 6.0.3.2'

# Use postgresql as the database for Active Record
gem 'pg', '>= 0.18', '< 2.0'

# Use Puma as the app server
gem 'puma', '~> 4.3'

# Webpacker
gem 'webpacker'

# Reactjs
gem 'react-rails'

# Build JSON APIs with ease. Read more: https://github.com/rails/jbuilder
# gem 'jbuilder', '~> 2.7'

# Use Active Model has_secure_password
gem 'bcrypt', '~> 3.1.7'

# JWT auth token
gem 'jwt'

# For background processing
# 6.0.6 causes heroku review branch deployment to break. Hence locked to 6.0.5 for now
gem "sidekiq", "6.0.5"

# Once Sidekiq 6.1 is launched we can remove this.
# This has been added to silence warnings which new version
# prints out to the logs
gem "redis", '4.1.4'

# Use Active Storage variant
# gem 'image_processing', '~> 1.2'

# Reduces boot times through caching; required in config/boot.rb
gem 'bootsnap', '>= 1.4.2', require: false

# Use Rack CORS for handling Cross-Origin Resource Sharing (CORS), making cross-origin AJAX possible
# gem 'rack-cors'

group :development, :test do
  # Call 'byebug' anywhere in the code to stop execution and get a debugger console
  gem 'byebug', platforms: %i[mri mingw x64_mingw]
  
  # Factory bot for tests
  gem 'factory_bot_rails'
end

group :development do
  gem 'listen', '~> 3.2'
  
  # Spring speeds up development by keeping your application running in the background. Read more: https://github.com/rails/spring
  gem 'spring'
  gem 'spring-watcher-listen', '~> 2.0.0'

  # Patch-level verification for Bundler.
  gem 'bundler-audit', require: false

  # A Ruby static code analyzer, based on the community Ruby style guide
  gem 'rubocop', require: false
  gem 'rubocop-performance'
  gem 'rubocop-rails'

  # vulnerabity checker for Ruby itself.
  gem 'ruby_audit', require: false
end

# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
gem 'tzinfo-data', platforms: %i[mingw mswin x64_mingw jruby]

gem 'rename'
