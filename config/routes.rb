Rails.application.routes.draw do
  root "home#index", as: :home

  draw :api

  get "*path", to: "home#index", via: :all
end
