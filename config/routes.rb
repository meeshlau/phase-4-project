Rails.application.routes.draw do
  get '/hello', to: 'application#hello_world'

  get '*path',
  to: 'fallback#index',
  constraints: ->(req) { !req.xhr? && req.format.html? }

  resources :books
  resources :reviews, only: [:index, :create, :destroy]
  resources :users, only: [:index, :create, :show, :destroy]
end
