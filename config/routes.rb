Rails.application.routes.draw do
  root "home#index", as: :home

  namespace :api do
    namespace :v1 do
      resource :session, only: %i[create show]
      resources :users, only: %i[create show destroy]
    end
  end

  get "*path", to: "home#index", via: :all
end
