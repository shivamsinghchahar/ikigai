FactoryBot.define do
  factory :user do
    first_name { 'Sam' }
    last_name { 'Smith' }
    email { 'sam@example.com' }
    password_digest { User.digest('password') }
  end
end
