Rails.application.routes.draw do
  root 'home#index', as: :home
  get '*path', to: 'home#index', via: :all
end
